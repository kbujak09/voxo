import reactionImage from '../../../../../assets/like-reaction.svg';
import sendBtnImage from '../../../../../assets/send-btn.svg';

import styles from './dynamic-button.module.scss';

type DynamicButtonProps = {
  isNotEmpty: boolean;
};
 
const DynamicButton = ({ isNotEmpty }: DynamicButtonProps) => {
  return (
    <div className={styles.container}>
      <img 
        src={isNotEmpty ? sendBtnImage : reactionImage } 
        alt={isNotEmpty ? 'send message button' : 'reaction emote'} 
        className={`${styles.img} ${styles.fade}`}
        key={isNotEmpty ? 'send' : 'like'}
      />
    </div>
  )
};

export default DynamicButton;