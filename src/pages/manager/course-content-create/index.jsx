import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Heading,
    Link,
    List
} from 'ckeditor5'

export default function ManageContentCreatePage() {
    return (
        <>
            <div id="Breadcrumb" className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5">
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Manage Course</span>
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Course</span>
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Add Content</span>
            </div>

            <header className="flex items-center justify-between gap-[30px]">
                <div className="flex items-center gap-[30px]">
                    <div className="flex shrink-0 w-[150px] h-[100px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                        <img
                            src="/assets/images/thumbnails/th-1.png"
                            className="w-full h-full object-cover"
                            alt="thumbnail"
                        />
                    </div>
                    <div>
                        <h1 className="font-extrabold text-[28px] leading-[42px]">Add Content</h1>
                        <p className="text-[#838C9D] mt-[1]">
                            Give a best content for the course
                        </p>
                    </div>
                </div>
            </header>

            <form className="flex flex-col w-[930px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold">Content Title</label>
                    <input
                        type="text"
                        className="border rounded-full px-5 py-3"
                        placeholder="Write better name for your course"
                    />
                </div>

                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold">Content Text</label>

                    <CKEditor
                        editor={ClassicEditor}
                        config={{
                            plugins: [
                                Essentials,
                                Paragraph,
                                Bold,
                                Italic,
                                Heading,
                                Link,
                                List
                            ],
                            toolbar: [
                                'heading',
                                '|',
                                'bold',
                                'italic',
                                'link',
                                'bulletedList',
                                'numberedList',
                                '|',
                                'undo',
                                'redo'
                            ]
                        }}
                        data="<p>Tulis konten materi di sini...</p>"
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            console.log(data)
                        }}
                    />
                </div>

                <div className="flex items-center gap-[14px]">
                    <button
                        type="submit"
                        className="w-full rounded-full border p-[14px_20px] font-semibold"
                    >
                        Save as Draft
                    </button>
                    <button
                        type="submit"
                        className="w-full rounded-full p-[14px_20px] font-semibold text-white bg-[#662FFF]"
                    >
                        Add Content Now
                    </button>
                </div>
            </form>
        </>
    )
}
