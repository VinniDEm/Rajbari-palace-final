import { useState } from 'react'

/**
 * BookingWidget — eZee Booking Engine Form Component
 * 
 * This component renders the inline eZee iPMS247 booking box form.
 * Class names (.outerbewrap, .bewarp, .bb_resbox, #bb_resBtn) follow the
 * standard eZee Booking Engine widget conventions as specified by the client.
 * 
 * The form collects check-in/check-out dates, adults, and children,
 * then redirects to the eZee booking portal with pre-filled search params.
 */
export default function BookingWidget() {
  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  const [formData, setFormData] = useState({
    checkIn: today,
    checkOut: tomorrow,
    adults: 2,
    children: 0,
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  /**
   * Formats date from YYYY-MM-DD (native input) to DD-MM-YYYY (eZee format)
   */
  const formatDateForEzee = (dateStr) => {
    if (!dateStr) return ''
    const parts = dateStr.split('-')
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`
    }
    return dateStr
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const baseUrl =
      import.meta.env.VITE_EZEE_BOOKING_URL ||
      'https://live.ipms247.com/booking/book-rooms-rajbaripalace'

    const url = new URL(baseUrl)
    url.searchParams.set('checkin', formatDateForEzee(formData.checkIn))
    url.searchParams.set('checkout', formatDateForEzee(formData.checkOut))
    url.searchParams.set('adults', formData.adults)
    if (formData.children > 0) {
      url.searchParams.set('children', formData.children)
    }

    window.open(url.toString(), '_blank')
  }

  return (
    <div className="outerbewrap">
      <div className="bewarp">
        <form className="bb_resbox" onSubmit={handleSubmit}>
          <div className="bb_resbox_field">
            <label className="bb_resbox_label">Check-in</label>
            <input
              type="date"
              className="bb_resbox_input"
              required
              value={formData.checkIn}
              onChange={(e) => handleChange('checkIn', e.target.value)}
            />
          </div>

          <div className="bb_resbox_field">
            <label className="bb_resbox_label">Check-out</label>
            <input
              type="date"
              className="bb_resbox_input"
              required
              min={formData.checkIn || undefined}
              value={formData.checkOut}
              onChange={(e) => handleChange('checkOut', e.target.value)}
            />
          </div>

          <div className="bb_resbox_field">
            <label className="bb_resbox_label">Adults</label>
            <select
              className="bb_resbox_select"
              value={formData.adults}
              onChange={(e) => handleChange('adults', parseInt(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Adult' : 'Adults'}
                </option>
              ))}
            </select>
          </div>

          <div className="bb_resbox_field">
            <label className="bb_resbox_label">Children</label>
            <select
              className="bb_resbox_select"
              value={formData.children}
              onChange={(e) => handleChange('children', parseInt(e.target.value))}
            >
              {[0, 1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Child' : 'Children'}
                </option>
              ))}
            </select>
          </div>

          <div className="bb_resbox_field bb_resbox_btn_wrap">
            <button type="submit" id="bb_resBtn">
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
