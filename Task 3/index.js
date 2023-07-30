window.addEventListener('load', () => {
	const form = document.querySelector("#task3");
	const input = document.querySelector("#IP");
	const list_item = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_item = document.createElement('div');
		task_item.classList.add('task');

		const task_con_item = document.createElement('div');
		task_con_item.classList.add('content');

		task_item.appendChild(task_con_item);

		const task_input_item = document.createElement('input');
		task_input_item.classList.add('text');
		task_input_item.type = 'text';
		task_input_item.value = task;
		task_input_item.setAttribute('readonly', 'readonly');

		task_con_item.appendChild(task_input_item);

		const task_act_item = document.createElement('div');
		task_act_item.classList.add('actions');
		
		const task_edit_item = document.createElement('button');
		task_edit_item.classList.add('edit');
		task_edit_item.innerText = 'Edit';

		const task_del_item = document.createElement('button');
		task_del_item.classList.add('delete');
		task_del_item.innerText = 'Delete';

		task_act_item.appendChild(task_edit_item);
		task_act_item.appendChild(task_del_item);

		task_item.appendChild(task_act_item);

		list_item.appendChild(task_item);

		input.value = '';

		task_edit_item.addEventListener('click', (e) => {
			if (task_edit_item.innerText.toLowerCase() == "edit") {
				task_edit_item.innerText = "Save";
				task_input_item.removeAttribute("readonly");
				task_input_item.focus();
			} else {
				task_edit_item.innerText = "Edit";
				task_input_item.setAttribute("readonly", "readonly");
			}
		});

		task_del_item.addEventListener('click', (e) => {
			list_item.removeChild(task_item);
		});
	});
});
