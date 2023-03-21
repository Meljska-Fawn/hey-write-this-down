const noteList = document.getElementById('list-container');
const note = document.getElementById('note-container');
const saveNote = document.getElementById('saveNote');

saveNote
    .addEventListener('submit', (e) => {
        e.preventDefault();

        let title = document.getElementById('noteTitle').value;

        let text = document.getElementById('noteText').value.trim();

        const newNote = {
            title,
            text,
        };

        fetch('api/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.status);
                title = '';
                text = '';
            });
    })
    .catch((error) => {
        console.error('Error:', error);
    });