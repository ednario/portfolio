'use client'

import { useForm } from 'react-hook-form'
import { HiArrowNarrowRight } from 'react-icons/hi'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import SectionTitle from '../section-title'
import Button from '../button'
import axios from 'axios'
import toast from 'react-hot-toast'

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const fieldClassName =
  'w-full bg-gray-900/70 border border-gray-800 rounded-lg placeholder:text-gray-500 text-gray-50 p-4 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/60 transition-colors'

function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      await axios.post('/api/contact', data)
      toast.success('Mensagem enviada com sucesso!')
      reset()
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente.')
    }
  }

  return (
    <section
      id="contato"
      className="relative py-20 px-6 md:py-28 flex items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,150,105,0.12),transparent_60%)]"
      />

      <div className="relative w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center [&>span:last-child]:mx-auto"
        />
        <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className={`${fieldClassName} h-14`}
            {...register('name')}
          />
          <input
            placeholder="E-mail"
            type="email"
            className={`${fieldClassName} h-14`}
            {...register('email')}
          />
          <textarea
            placeholder="Mensagem"
            className={`${fieldClassName} resize-none h-[138px]`}
            {...register('message')}
            maxLength={500}
          />

          <div className="relative w-max mx-auto mt-6">
            <Button className="relative z-[2]" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              <HiArrowNarrowRight size={18} />
            </Button>
            <div
              aria-hidden
              className="absolute inset-0 bg-emerald-600 blur-2xl opacity-25"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
