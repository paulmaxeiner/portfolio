import React, { useState } from 'react';


export default function ContactForm() {
  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
    </form>
  )
}
