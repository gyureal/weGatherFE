import React from 'react';
import { useLocation } from "react-router-dom";

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