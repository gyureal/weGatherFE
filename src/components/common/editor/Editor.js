import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./Editor.css"
import { Box } from '@mui/material';

function Editor({ field }) {
    return (
        <Box>
            <CKEditor
                editor={ClassicEditor}
                config={{ placeholder: field.hintText }}
                data={field.input.value}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    return field.input.onChange(editor.getData())
                }
                }
            />
        </Box>
    )
}

export default Editor