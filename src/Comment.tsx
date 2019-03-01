import * as React from 'react';

interface ICommentProps {
  /**
   * Name of person commenting
   *
   * @type string
   */
  name: string;
  /**
   * Actual comment from the user
   *
   * @type string
   */
  context?: string;
  /**
   * Time comment was made
   *
   * @type string
   */
  timestamp: string;
  /**
   * Source of the profile picture
   *
   * @type string
   */
  photo: string;
  /**
   * State if the CommentCard is expanded
   *
   * @type string
   */
  expanded: boolean;
}

/**
 * Comment React Component
 */
export class Comment extends React.Component<ICommentProps> {
  /**
   * Constructor
   *
   * @param props React props
   */
  constructor(props: ICommentProps) {
    super(props);
  }

  /**
   * React render function
   */
  render() {
    return (
      <div>
        <div style={this.styles['jp-commenting-annotation-upper-area']}>
          <div style={this.styles['jp-commenting-annotation-photo-area']}>
            <img
              style={this.styles['jp-commenting-annotation-photo']}
              src={this.props.photo}
            />
          </div>
          <div style={this.styles['jp-commenting-annotation-info-area']}>
            <div style={this.styles['jp-commenting-annotation-name-area']}>
              <h1 style={this.styles['jp-commenting-annotation-name']}>
                {this.props.name}
              </h1>
            </div>
            <div style={this.styles['jp-commenting-annotation-timestamp-area']}>
              <p style={this.styles['jp-commenting-annotation-timestamp']}>
                {this.timeStampStyle()}
              </p>
            </div>
          </div>
        </div>
        <div style={this.styles['jp-commenting-annotation-area']}>
          <p style={this.styles['jp-commenting-annotation']}>
            {this.props.context.length >= 125 && !this.props.expanded
              ? this.props.context.slice(0, 125) + '...'
              : this.props.context}
          </p>
        </div>
      </div>
    );
  }

  timeStampStyle(): string {
    let serverTimeStamp = new Date(this.props.timestamp);
    let localTimeStamp = serverTimeStamp.toLocaleString();
    let fullDate = localTimeStamp.split(',')[0].split('/');
    let fullTime = localTimeStamp.split(',')[1].split(':');
    let timeIdentifier = fullTime[2].slice(3).toLowerCase();

    let month: any = {
      '1': 'Jan',
      '2': 'Feb',
      '3': 'Mar',
      '4': 'Apr',
      '5': 'May',
      '6': 'Jun',
      '7': 'Jul',
      '8': 'Aug',
      '9': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec'
    };
    let timestamp =
      month[fullDate[0]] +
      ' ' +
      fullDate[1] +
      fullTime[0] +
      ':' +
      fullTime[1] +
      timeIdentifier;
    return timestamp;
  }
  /**
   * CSS Styles
   */
  styles = {
    'jp-commenting-annotation-upper-area': {
      display: 'flex',
      flexDirection: 'row' as 'row',
      boxSizing: 'border-box' as 'border-box',
      padding: '4px',
      background: 'var(--jp-layout-color1)'
    },
    'jp-commenting-annotation-info-area': {
      display: 'flex',
      flexDirection: 'column' as 'column',
      flexShrink: 1,
      minWidth: '52px',
      width: '100%',
      paddingLeft: '4px',
      boxSizing: 'border-box' as 'border-box'
    },
    'jp-commenting-annotation-photo-area': {
      display: 'flex'
    },
    'jp-commenting-annotation-photo': {
      height: '2em',
      width: '2em',
      borderRadius: 'var(--jp-border-radius)'
    },
    'jp-commenting-annotation-name-area': {
      display: 'flex',
      flexShrink: 1,
      minWidth: '52px',
      boxSizing: 'border-box' as 'border-box'
    },
    'jp-commenting-annotation-name': {
      fontSize: '13px',
      color: 'var(--jp-ui-font-color0)',
      fontWeight: 'bold' as 'bold',
      whiteSpace: 'nowrap' as 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      margin: '0px'
    },
    'jp-commenting-annotation-timestamp-area': {
      display: 'flex',
      minWidth: '52px',
      flexShrink: 1,
      boxSizing: 'border-box' as 'border-box'
    },
    'jp-commenting-annotation-timestamp': {
      fontSize: '.7em',
      color: 'var(--jp-ui-font-color0)',
      whiteSpace: 'nowrap' as 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    },
    'jp-commenting-annotation-area': {
      display: 'flex',
      maxHeight: '100%',
      maxWidth: '350px',
      boxSizing: 'border-box' as 'border-box',
      paddingBottom: '4px',
      paddingLeft: '4px',
      paddingRight: '4px',
      background: 'var(--jp-layout-color1)'
    },
    'jp-commenting-annotation': {
      fontSize: '12px',
      color: 'var(--jp-ui-font-color0)',
      lineHeight: 'normal'
    }
  };
}
