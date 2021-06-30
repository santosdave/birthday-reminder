import React from 'react'

function SingleColor() {
    return (
        <article >
      <p className='percent-value'>weight %</p>
      <p className='color-value'>hexValue</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
    )
}

export default SingleColor
