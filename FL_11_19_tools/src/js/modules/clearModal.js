import { modal } from "../main";

export default function clearModal(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}