import React from 'react'
import { connect, ConnectedProps  } from 'react-redux';
import TopicTable from './components/Table/TopicTable'
import Discussion, { Tmessage } from './components/Discussion/Discussion'
import { TdiscussionformData } from './components/Forms/DiscussionForm/DiscussionForm'
import CustomDrawer from '../../components/Drawer/Drawer'
import { ForumLargeButton } from './components/Button/Button'
import TopicForm, {
  TtopicformData,
} from './components/Forms/TopicForm/TopicForm'
import { RootState, AppDispatch } from '../../redux/store';
import { IforumTopicModel } from '../../models/forum.model';
import { forumSlice } from '../../redux/forum/forum.slice';
import { getTopicList, setTopic, setMessage } from '../../redux/forum/forum.actions';
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


type TtopicItem = {
  _id: number
  header: string,
  userName: string,
  replyNumber: number
  color: string
  body: string
  messageList: Tmessage[]
}

type TmapStateToProps = (state: RootState) => ({
  topicList: TtopicItem[],
})

const dateToString = (date:number) => String(date)

const mapStateToProps:TmapStateToProps = (state: RootState) => {
  const data = state.forum.topicList.map((topic) => {
    return {
      ...topic,
      replyNumber: topic.messageList.length - 1,
      color: getRandomArrayitem(COLOR_LIST),
      userName: topic.owner.name,
      messageList: topic.messageList.map((message) => ({ ...message, date: dateToString(message.date)}))
    }
  })
  return ({
    topicList: data,
})};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getTopicList: () => {
    dispatch(getTopicList());
  },
  setTopic: (data: Omit<IforumTopicModel, '_id'|'messageList'|'owner'>) => {
    dispatch(setTopic(data))
  },
  setMessage: (data: { topicId: number, body: string }) => {
    dispatch(setMessage(data))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type TforumProps = PropsFromRedux;





const SHOW_TOPIC_FORUM_BUTTON_TEXT = 'New topic'
const GO_BACK_FORUM_BUTTON_TEXT = 'Go back'
const FORM_HEDER = 'Отправьте свое обращение'

const Forum: React.FC<TforumProps> = ({ topicList, getTopicList, setTopic, setMessage }) => {
  const [selectedTopic, setSelectedTopic] = React.useState<TtopicItem | null>(
    null
  )
  const [isShowTopicForm, setIsShowTopicForm] = React.useState<boolean>(false)
  
  React.useEffect(() => {
    getTopicList();
  }, []);

  React.useEffect(() => {
    const topic = topicList.find(topic => topic._id === selectedTopic?._id)
    if (topic) {
      setSelectedTopic(topic)
    }
  }, [topicList]);

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

  const addTopic = (data: TtopicformData) => {
    const { header, body } = data;
    setTopic({ header, body });
  }

  const handleSubmitTopicForm = (data: TtopicformData) => {
    const { header, body } = data
    addTopic({
      header,
      body,
    })
  }

  const addMessage = (data: TdiscussionformData) => {
    const { text } = data
        
    const topic = topicList.find(topic => topic._id === selectedTopic?._id)
    if (topic) {
      setMessage({ topicId: topic._id, body: text })
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
          <div className={styles.drawerContent}>
            <div className={styles.form}>
              <h3 className={`${styles.header} ${styles.header__type_form}`}>
                {FORM_HEDER}
              </h3>
              <TopicForm
                handleSubmit={handleSubmitTopicForm}
                closeForm={hideTopicForm}
              />
            </div>
          </div>
      </CustomDrawer>
    </div>
  )
}

export default connector(Forum)
