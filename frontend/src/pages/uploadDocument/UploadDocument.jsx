import { useState } from "react";
import { IconClose, IconDoc, IconUpload } from "../../utils/Icons";
import axios from "axios";

export const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const dropped = Array.from(e.dataTransfer.files);
    const newFiles = dropped.map((f) => ({
      name: f.name,
      size: `${(f.size / 1024).toFixed(0)} KB`,
      status: "done",
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleUploadFile = async (e) => {
    const files = e.target.files;
    console.log("files: ", files);
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/upload/upload",
        formData,
      );

      console.log("response: ", response);

      setFiles((prev) => [...prev, ...response.data.data]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Upload Documents</h2>
      <p className="text-sm text-gray-400 mb-7">
        Upload your store reports, invoices, or data files.
      </p>

      {/* Drop zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-2xl p-12 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${dragging ? "border-[#b5f23d] bg-[#b5f23d]/5" : "border-gray-200 hover:border-[#b5f23d] hover:bg-gray-50"}`}
      >
        <div className="w-14 h-14 rounded-full bg-[#b5f23d]/15 flex items-center justify-center mb-4">
          <IconUpload />
        </div>
        <p className="text-sm font-semibold text-gray-700 mb-1">
          Drag & drop files here
        </p>
        <p className="text-xs text-gray-400 mb-4">
          PDF, XLSX, CSV, DOCX up to 50MB
        </p>
        <label className="cursor-pointer bg-[#b5f23d] hover:bg-[#a3e030] text-gray-900 text-xs font-semibold px-5 py-2 rounded-lg transition-colors">
          Browse Files
          <input
            type="file"
            className="hidden"
            multiple
            onChange={(e) => handleUploadFile(e)}
          />
        </label>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
            Uploaded Files
          </p>

          {files.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-[#b5f23d]/15 flex items-center justify-center flex-shrink-0">
                <IconDoc />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {f.name}
                </p>
                <p className="text-xs text-gray-400">{f.size}</p>
              </div>
              <span className="text-xs font-semibold text-[#5a8a00] bg-[#b5f23d]/20 px-2 py-0.5 rounded-full">
                Done
              </span>
              <button
                onClick={() => setFiles(files.filter((_, j) => j !== i))}
                className="text-gray-300 hover:text-gray-500 transition-colors ml-1"
              >
                <IconClose />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
