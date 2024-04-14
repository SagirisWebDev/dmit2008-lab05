'use client'
import {useFormState} from 'react-dom'

import {toast} from 'sonner'

import {cn} from '@/lib/utils/mergeCss'
import {addAction} from '@/actions/addTaskAction'
import {FormControl, Input, Label} from '.'

const initialState = {
	message: 'default',
}

function AddTaskFrom({children, className}) {
	const [state, formAction] = useFormState(addAction, initialState)

	if (state.message === 'success') {
		toast(
			<aside className="bg-blue-500 text-white rounded-lg py-8 text-center">
				<p> Your New Task Was Saved</p>
			</aside>
		)
	}

	return (
		<section>
			<header>
				<h2 className="text-xs font-light">
					Form State: <span className={cn('font-bold text-red-500', className, {'text-green-500' : state.message == 'success'})}>{state.message}</span>
				</h2>
			</header>
			<form action={formAction} className={cn('space-y-5 bg-white py-10', className)}>
				<FormControl className="flex flex-col">
					<Label htmlFor="category" className='text-left'>Category</Label>
					<Input id="category" name="category" />
				</FormControl>

				<FormControl className="flex flex-col">
					<Label htmlFor="task" className='text-left'>Task</Label>
					<Input id="todos" name="todos" />
				</FormControl>
				<FormControl className="pt-3">
					<button className="bg-black text-white w-full py-2.5 rounded-lg mt-3 font-semibold">
						Add New Task
					</button>
				</FormControl>
			</form>
		</section>
	)
}

export {AddTaskFrom}
