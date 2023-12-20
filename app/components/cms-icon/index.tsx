type CMSIconProps = {
  icon: string
}

function CMSIcon({ icon }: CMSIconProps) {
  return <div dangerouslySetInnerHTML={{ __html: icon }} />
}

export default CMSIcon
