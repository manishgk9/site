// export default function ContactForm() {
//   return (
//     <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-8">
//       <form className="flex flex-col gap-4">
//         <div>
//           <label className="block mb-1 text-sm font-medium">Name</label>
//           <input
//             type="text"
//             placeholder="Your Name"
//             className="w-full border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-sm font-medium">Email</label>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             className="w-full border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
//           />
//         </div>
//         <div>
//           <label className="block mb-1 text-sm font-medium">Message</label>
//           <textarea
//             placeholder="Your message..."
//             rows="4"
//             className="w-full border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
//           ></textarea>
//         </div>
//         <button className="bg-blue-500 text-white w-full sm:w-auto px-6 py-2 rounded-md hover:bg-blue-600 transition">
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const mailtoLink = `mailto:emanish365@gmail.com?subject=${encodeURIComponent(
  //   `Message from ${formData.name}`
  // )}&body=${encodeURIComponent(
  //   `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  // )}`;
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=emanish365@gmail.com&su=${encodeURIComponent(
    `Message from ${formData.name}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-8">
      <form className="flex flex-col gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows="4"
            className="w-full border rounded-md p-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
          ></textarea>
        </div>
        <a
          href={mailtoLink}
          className="bg-blue-500 text-white w-full sm:w-auto px-6 py-2 rounded-md hover:bg-blue-600 transition text-center"
        >
          Send Message
        </a>
      </form>
    </div>
  );
}
