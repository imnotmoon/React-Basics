function likeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? '좋아요 취소' : '좋아요';
    return React.createElement(
        'button',
        {onClick : () => setLiked(!liked) },
        text,
    )
}

const domContainer = document.querySelector('#react-root');
ReactDOM.render(
    React.createElement(likeButton),
    document.querySelector('#react-root1'),
)

ReactDOM.render(
    React.createElement(likeButton),
    document.querySelector('#react-root2'),
)

ReactDOM.render(
    React.createElement(likeButton),
    document.querySelector('#react-root3'),
)