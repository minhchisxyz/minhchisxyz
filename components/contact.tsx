'use client'

import { useActionState, useEffect } from 'react'
import { sendEmail } from '@/app/lib/actions'
import { toast } from 'sonner'

const initialState = {
  success: false,
  message: '',
}

export default function Contact () {
  const [state, formAction, isPending] = useActionState(sendEmail, initialState)

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message)
      } else {
        toast.error(state.message)
      }
    }
  }, [state])

  const glass = `bg-white/15 backdrop-blur-md border-none rounded-3xl`
  const hover = 'hover:shadow-[4px_4px_8px_#111111,-2px_-2px_6px_#ffffff] hover:cursor-pointer hover:rounded-3xl'
  const active = 'active:shadow-none active:inset-shadow-[-4px_4px_8px_#000000,2px_-2px_6px_#ffffff]'

  return (
      <section id="contact" className="py-24">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 shadow-xl">
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Have a question or a project idea? I&apos;d love to hear from you.
            </p>
            <form action={formAction} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
                  Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/10 transition-all"
                    placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
                  Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                    htmlFor="message"
                    className="block text-gray-200 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/10 transition-all"
                    placeholder="Your message..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                    type="submit"
                    disabled={isPending}
                    className={`px-10 py-3 text-white font-semibold transition-all ${glass} ${hover} ${active} disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isPending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
  )
}
