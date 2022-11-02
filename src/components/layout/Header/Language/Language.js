import React from 'react'

const Language = ({USAFlag}) => {
  return (
    <div className="language">
					<span>
						<img
							src={USAFlag}
							alt="english"
							width={40}
						/>
					</span>
					<div className="language-content">
						<p>Hello World!</p>
						<p>Hello World!</p>
						<p>Hello World!</p>
						<p>Hello World!</p>
						<p>Hello World!</p>
					</div>
				</div>
  )
}

export default Language
