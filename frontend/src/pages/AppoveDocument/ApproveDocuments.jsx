import { useState } from "react";
import { IconDoc } from "../../utils/Icons";

export const ApproveDocumentsPage = () => {
  const [docs, setDocs] = useState([
    { id: 1, name: "Q3_Report_2024.pdf",   uploader: "Sara Holt",   date: "Apr 01, 2026", status: "pending" },
    { id: 2, name: "Sales_Data_Oct.xlsx",  uploader: "Marcus Liu",  date: "Apr 02, 2026", status: "pending" },
    { id: 3, name: "Invoice_Nov_2024.pdf", uploader: "Anya Patel",  date: "Apr 02, 2026", status: "approved" },
    { id: 4, name: "HR_Policy_v2.docx",    uploader: "Deven Roy",   date: "Apr 03, 2026", status: "rejected" },
  ]);

  const update = (id, status) =>
    setDocs(prev => prev.map(d => d.id === id ? { ...d, status } : d));

  const badge = (status) => ({
    pending:  "bg-yellow-50 text-yellow-600",
    approved: "bg-[#b5f23d]/20 text-[#5a8a00]",
    rejected: "bg-red-50 text-red-500",
  }[status]);

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Approve Documents</h2>
      <p className="text-sm text-gray-400 mb-7">Review and approve or reject submitted documents.</p>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-50">
          <p className="text-sm font-semibold text-gray-800">Pending Review</p>
          <span className="text-xs bg-yellow-50 text-yellow-600 font-semibold px-2.5 py-0.5 rounded-full">
            {docs.filter(d => d.status === "pending").length} pending
          </span>
        </div>

        <div className="divide-y divide-gray-50">
          {docs.map(doc => (
            <div key={doc.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#b5f23d]/10 flex items-center justify-center flex-shrink-0">
                <IconDoc />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{doc.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Uploaded by <span className="text-gray-600 font-medium">{doc.uploader}</span> · {doc.date}
                </p>
              </div>

              {/* Status badge */}
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize flex-shrink-0 ${badge(doc.status)}`}>
                {doc.status}
              </span>

              {/* Actions — only show if still pending */}
              {doc.status === "pending" && (
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => update(doc.id, "rejected")}
                    className="text-xs border border-red-200 text-red-500 hover:bg-red-50 px-3 py-1.5 rounded-lg font-medium transition-colors"
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => update(doc.id, "approved")}
                    className="text-xs bg-[#b5f23d] hover:bg-[#a3e030] text-gray-900 px-3 py-1.5 rounded-lg font-semibold transition-colors"
                  >
                    Approve
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};