import { QrCode } from 'lucide-react'

export function QRCode() {
  return (
    <div className="w-48 h-48 bg-white p-3 rounded-lg">
      <div className="w-full h-full border-8 border-black rounded-lg flex items-center justify-center">
        <QrCode size={120} />
      </div>
    </div>
  )
}

