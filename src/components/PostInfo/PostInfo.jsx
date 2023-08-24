import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

const noCommentsMessage = 'No comments yet';

export const PostInfo = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />

            <b data-cy="NoCommentsMessage">
              {noCommentsMessage}
            </b>
          </>
        )
      }
    </div>
  );
};