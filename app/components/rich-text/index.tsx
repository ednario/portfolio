import { ComponentProps } from 'react'

import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'

type RichTextProps = ComponentProps<typeof CMSRichText>

function RichText({ ...props }: RichTextProps) {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => (
          <b className="text-gray-50 font-medium">{children}</b>
        ),
      }}
    />
  )
}

export default RichText
