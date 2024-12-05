import React, { useState } from 'react'

const LessonForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferences: {
      careerAndBusiness: false,
      lessonForKids: false,
      livingAbroad: false,
      examsAndCoursework: false,
      cultureTravelHobby: false
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [name]: checked
      }
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Data:', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="checkbox"
            name="careerAndBusiness"
            checked={formData.preferences.careerAndBusiness}
            onChange={handleCheckboxChange}
          />
          Career and business
        </label>
        <label>
          <input
            type="checkbox"
            name="lessonForKids"
            checked={formData.preferences.lessonForKids}
            onChange={handleCheckboxChange}
          />
          Lesson for kids
        </label>
        <label>
          <input
            type="checkbox"
            name="livingAbroad"
            checked={formData.preferences.livingAbroad}
            onChange={handleCheckboxChange}
          />
          Living abroad
        </label>
        <label>
          <input
            type="checkbox"
            name="examsAndCoursework"
            checked={formData.preferences.examsAndCoursework}
            onChange={handleCheckboxChange}
          />
          Exams and coursework
        </label>
        <label>
          <input
            type="checkbox"
            name="cultureTravelHobby"
            checked={formData.preferences.cultureTravelHobby}
            onChange={handleCheckboxChange}
          />
          Culture, travel or hobby
        </label>
      </div>
      <div>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </label>
      </div>
    </form>
  )
}

export default LessonForm
