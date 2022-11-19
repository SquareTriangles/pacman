import React from 'react'
import Form from '../../../../../components/Form/Form'
import TextArea from '../../../../../components/TextArea/TextArea'
import { ForumLargeButton } from '../../Button/Button'
//@ts-ignore
import styles from '../styles.module.css'

const TEXTAREA_PLACEHOLDER = 'Сообщение'
const SEND_MESSAGE_BUTTON_TEXT = 'Send'

export type TdiscussionformData = {
  text: string
}

type TdiscussionFormProps = {
  handleSubmit: (data: TdiscussionformData) => void
}

const initialFormState: TdiscussionformData = {
  text: '',
}

const DiscussionForm: React.FC<TdiscussionFormProps> = ({ handleSubmit }) => {
  const [formData, setFormData] =
    React.useState<TdiscussionformData>(initialFormState)

  const handleChangeInput = <El extends HTMLTextAreaElement>(
    evt: React.ChangeEvent<El>
  ): void => {
    const { name, value } = evt.target
    setFormData({ ...formData, [name]: value })
  }

  const dropForm = () => {
    setFormData(initialFormState)
  }

  const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    handleSubmit(formData)
    dropForm()
  }
  return (
    <Form
      onSubmit={onSubmit}
      className={`${styles.form} ${styles.form__type_discussion}`}>
      <TextArea
        name="text"
        onChange={handleChangeInput}
        className={styles.textarea}
        placeholder={TEXTAREA_PLACEHOLDER}
        value={formData.text}></TextArea>
      <ForumLargeButton
        type="submit"
        text={SEND_MESSAGE_BUTTON_TEXT}
        className={styles.submit}
      />
    </Form>
  )
}

export default DiscussionForm
