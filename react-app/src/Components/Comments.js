const Comments = (props) => {
  const items = []
  for (let i = 0; i < props.comments.length; i++) {
    items.push(<li key={i}>{props.comments[i]}</li>);
  }
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <ul>{items}</ul>
  </div>
}
  
export default Comments;