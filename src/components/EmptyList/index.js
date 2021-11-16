export default function EmptyList ({ text }) {
  const appendedText = text === ' ' ? '' : ` ${text} `
  return (
    <div>
      <p className='status free emptylist'>
        <img src='https://nourabusoud.github.io/vue-todo-list/images/beer_celebration.svg' alt='celebration' />
        {`Time to chill!  You have no${appendedText}todos.`}
      </p>
    </div>
  )
}
