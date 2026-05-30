
import { IconLogout } from "../utils/Icons";

function Modal({ isOpen, title, children, footer }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-80 text-center">
        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
          <IconLogout />
        </div>
        <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-6">{children}</p>
        {footer && <div className="flex gap-3">{footer}</div>}
      </div>
    </div>
  );
}

export default Modal;
