import React from 'react'
import Form from '../../../../../components/Form/Form'
import Input from '../../../../../components/Input/Input'
import TextArea from '../../../../../components/TextArea/TextArea'
import { ForumLargeButton } from '../../Button/Button'
import styles from '../styles.module.css'

const SAVE_TOPIC_BUTTON_TEXT = 'Send'
const INPUT_PLACEHOLDER = 'Заголовок'
const TEXTAREA_PLACEHOLDER = 'Обращение'

export type TtopicformData = {
  header: string
  body: string
}

type TtopicFormProps = {
  handleSubmit: (data: TtopicformData) => void
  closeForm: () => void
}

const initialFormState: TtopicformData = {
  header: '',
  body: '',
}

const TopicForm: React.FC<TtopicFormProps> = ({ handleSubmit, closeForm }) => {
  const [formData, setFormData] =
    React.useState<TtopicformData>(initialFormState)

  const handleChangeInput = <El extends HTMLInputElement | HTMLTextAreaElement>(
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
    closeForm()
  }

  return (
    <Form
      onSubmit={onSubmit}
      className={`${styles.form} ${styles.form__type_topic}`}>
      <Input
        name="header"
        value={formData.header}
        onChange={handleChangeInput}
        className={styles.input}
        placeholder={INPUT_PLACEHOLDER}
      />
      <TextArea
        name="body"
        onChange={handleChangeInput}
        className={styles.textarea}
        placeholder={TEXTAREA_PLACEHOLDER}
        value={formData.body}></TextArea>
      <ForumLargeButton
        type="submit"
        text={SAVE_TOPIC_BUTTON_TEXT}
        className={styles.submit}
      />
    </Form>
  )
}

export default TopicForm
