import React from 'react'
import TopicTable from './components/Table/TopicTable'
import Discussion, { Tmessage } from './components/Discussion/Discussion'
import { TdiscussionformData } from './components/Forms/DiscussionForm/DiscussionForm'
import CustomDrawer from '../../components/Drawer/Drawer'
import { ForumLargeButton } from './components/Button/Button'
import TopicForm, {
  TtopicformData,
} from './components/Forms/TopicForm/TopicForm'
import pacmanImage from '../../assets/images/pacman.png'
import styles from './styles.module.css'

const COLOR_LIST = [
  'Khaki',
  'Brown',
  'AntiqueWhite',
  'Aquamarine',
  'DarkOliveGreen',
  'Coral',
  'DarkSeaGreen',
]

const getRandomArrayitem = (arr: Array<string>): string => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const getRundomNumber = () => Math.ceil(Math.random() * 1000)

const TempMessageData = {
  user: {
    name: 'pacman',
    photo: pacmanImage,
  },
  date: '12. 12. 2022',
  body: 'some_message_text',
}

const tempTopicData = [
  {
    _id: getRundomNumber(),
    userName: 'pacman',
    header: 'Some question_1',
    replyNumber: getRundomNumber(),
    body: '',
    color: getRandomArrayitem(COLOR_LIST),
    messageList: [TempMessageData, TempMessageData],
  },
  {
    _id: getRundomNumber(),
    userName: 'batman',
    header: 'Some question_2',
    replyNumber: getRundomNumber(),
    body: '',
    color: getRandomArrayitem(COLOR_LIST),
    messageList: [TempMessageData, TempMessageData],
  },
  {
    _id: getRundomNumber(),
    userName: 'spider man',
    header: 'Some question_3',
    replyNumber: getRundomNumber(),
    body: '',
    color: getRandomArrayitem(COLOR_LIST),
    messageList: [TempMessageData, TempMessageData],
  },
  {
    _id: getRundomNumber(),
    userName: 'shrek',
    header: 'Some question_4',
    replyNumber: getRundomNumber(),
    body: '',
    color: getRandomArrayitem(COLOR_LIST),
    messageList: [TempMessageData, TempMessageData],
  },
]

type TtopicItem = {
  _id: number
  userName: string
  header: string
  replyNumber: number
  color: string
  body: string
  messageList: Tmessage[]
}

const SHOW_TOPIC_FORUM_BUTTON_TEXT = 'New topic'
const GO_BACK_FORUM_BUTTON_TEXT = 'Go back'
const FORM_HEDER = 'Отправьте свое обращение'

const Forum: React.FC = () => {
  const [topicList, setTopicList] = React.useState<TtopicItem[]>(tempTopicData)
  const [selectedTopic, setSelectedTopic] = React.useState<TtopicItem | null>(
    null
  )
  const [isShowTopicForm, setIsShowTopicForm] = React.useState<boolean>(false)

  const showTopicForm = () => {
    setIsShowTopicForm(true)
  }

  const hideTopicForm = () => {
    setIsShowTopicForm(false)
  }

  const handleRowClick = (_id: number) => {
    const topic = topicList.find(topic => topic._id === _id)
    if (topic) {
      setSelectedTopic(topic)
    }
  }

  const addTopic = (data: TtopicItem) => {
    setTopicList([...topicList, data])
  }

  const handleSubmitTopicForm = (data: TtopicformData) => {
    const { header, body } = data
    addTopic({
      _id: getRundomNumber(),
      replyNumber: getRundomNumber(),
      header,
      body,
      userName: 'pacman',
      color: getRandomArrayitem(COLOR_LIST),
      messageList: [],
    })
  }

  const addMessage = (data: TdiscussionformData) => {
    const { text } = data
    const message = {
      user: {
        name: 'pacman',
        photo: pacmanImage,
      },
      date: '12. 12. 2022',
      body: text,
    }
    const topic = topicList.find(topic => topic._id === selectedTopic?._id)
    if (topic) {
      topic.messageList.push(message)
      const filteredTopicList = topicList.filter(
        topic => topic._id !== selectedTopic?._id
      )
      filteredTopicList.push(topic)
      setTopicList(filteredTopicList)
      setSelectedTopic(topic)
    }
  }

  const goToTopic = () => {
    setSelectedTopic(null)
  }

  return (
    <div className={styles.page}>
      <div className={styles.buttonPanel}>
        {selectedTopic ? (
          <ForumLargeButton
            text={GO_BACK_FORUM_BUTTON_TEXT}
            onClick={goToTopic}
            type="button"
          />
        ) : (
          <ForumLargeButton
            text={SHOW_TOPIC_FORUM_BUTTON_TEXT}
            onClick={showTopicForm}
            type="button"
          />
        )}
      </div>
      {selectedTopic ? (
        <Discussion
          header={selectedTopic.header}
          data={selectedTopic.messageList}
          addMessage={addMessage}
        />
      ) : (
        <TopicTable data={topicList} handleRowClick={handleRowClick} />
      )}
      <CustomDrawer
        anchor="bottom"
        open={isShowTopicForm}
        onClose={hideTopicForm}>
        <div className={styles.form}>
          <h3 className={`${styles.header} ${styles.header__type_form}`}>
            {FORM_HEDER}
          </h3>
          <TopicForm
            handleSubmit={handleSubmitTopicForm}
            closeForm={hideTopicForm}
          />
        </div>
      </CustomDrawer>
    </div>
  )
}

export default Forum
