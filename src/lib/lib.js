import React from 'react';
import { useLocation } from "react-router-dom";
import Resizer from "react-image-file-resizer";

// https://v5.reactrouter.com/web/example/query-parameters
export function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

// base64 인코딩
export const convertObjectURLToBase64 = (objectURL) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            const reader = new FileReader();
            reader.onloadend = function () {
                resolve(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.onerror = function (error) {
            reject(error);
        };
        xhr.open('GET', objectURL);
        xhr.responseType = 'blob';
        xhr.send();
    });
};

export const convertDateFormat = (datetime) => {
    const originalDate = new Date(datetime);

    const year = originalDate.getFullYear();
    const month = originalDate.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
    const day = originalDate.getDate();

    return `${year}년 ${month}월 ${day}일`;
}

// https://www.npmjs.com/package/react-image-file-resizer
export const resizeFile = (file) =>
    new Promise((resolve) => {
        Resizer.imageFileResizer(
            file,
            300,
            300,
            "JPEG",
            100,
            0,
            (uri) => {
                resolve(uri);
            },
            "blob"
        );
    });