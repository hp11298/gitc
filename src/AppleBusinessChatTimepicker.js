/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Container from './Container';
import MessageRenderer from './Message';

export default class AppleBusinessChatListPickerTemplate extends PureComponent {
  render() {
    const {
      messageTitle,
      messageSubtitle,
      messageImgSrc,
      messageImgSize,
      replyTitle,
      replySubtitle,
      replyImgSrc,
      replyImgSize,
    } = this.props;

    const messageObject = {
      component: <MessageRenderer
        title={messageTitle}
        subtitle={messageSubtitle}
        imgSrc={messageImgSrc}
        imgSize={messageImgSize}
        alignImage="right"
      />,
      alignment: 'left',
    };

    const replyObject = {
      component: <MessageRenderer
        title={replyTitle}
        subtitle={replySubtitle}
        imgSrc={replyImgSrc}
        imgSize={replyImgSize}
        alignImage="left"
      />,
      alignment: 'right',
    };
    
    return (
      <Container
        messages={[{ messageObject }, { replyObject }]}
        accountName=""  
        accountLogoSrc=""
        timestamp=""
      />     
    );
  }
}

AppleBusinessChatListPickerTemplate.propTypes = {
  messageTitle: PropTypes.string,
  messageSubtitle: PropTypes.string,
  messageImgSrc: PropTypes.string,
  messageImgSize: PropTypes.string,
  replyTitle: PropTypes.string,
  replySubtitle: PropTypes.string,
  replyImgSrc: PropTypes.string,
  replyImgSize: PropTypes.string,

};
