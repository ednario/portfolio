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
  'w-full bg-slate-900/70 border border-white/10 rounded-xl placeholder:text-slate-500 text-slate-100 p-4 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40 backdrop-blur-md transition-all'

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
      className="relative py-24 px-6 flex items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_65%)]"
      />

      <div className="relative w-full max-w-[460px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos?"
          className="items-center text-center [&>span:last-child]:mx-auto"
        />
        <p className="text-slate-400 text-sm text-center mt-3">
          Estou aberto a novas oportunidades e parcerias. Deixe uma mensagem abaixo!
        </p>

        <form
          className="mt-8 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Seu nome"
            className={`${fieldClassName} h-13`}
            {...register('name')}
          />
          <input
            placeholder="Seu melhor e-mail"
            type="email"
            className={`${fieldClassName} h-13`}
            {...register('email')}
          />
          <textarea
            placeholder="Escreva sua mensagem..."
            className={`${fieldClassName} resize-none h-[130px]`}
            {...register('message')}
            maxLength={500}
          />

          <div className="relative w-max mx-auto mt-4">
            <Button size="lg" className="relative z-[2]" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Enviando...' : 'Enviar mensagem'}</span>
              <HiArrowNarrowRight size={18} />
            </Button>
            <div
              aria-hidden
              className="absolute inset-0 bg-blue-500 blur-2xl opacity-35"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
