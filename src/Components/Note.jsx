import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';

const Note = (props) => {
	const [name, setName] = useState({
		title: "",
		content: "",
	});

	const change = (event) => {
		const { name, value } = event.target;
		setName((prev) => {
			return {
				...prev, [name]: value
			}
		})

	}


	const add = () => {
		props.passNote(name);
		setName({
			title: "",
			content: "",
		})
	}

	return (
		<div className="flex">
			<div className="noteCard">

				<div className="flex1">
					<input type='text'
						name="title"
						placeholder='title'
						value={name.title}
						spellCheck="false"
						autoComplete='off'
						onChange={change}
					/>

					<Button onClick={add}><AddIcon color="success" className='icon' /></Button>
				</div>

				<textarea
					name="content"
					value={name.content}
					placeholder='write a note..'
					cols="30" rows="10"
					spellCheck="false"
					autoComplete='off'
					onChange={change}
				></textarea>
			</div>
		</div>
	)
}

export default Note;