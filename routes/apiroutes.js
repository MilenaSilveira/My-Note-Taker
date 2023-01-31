const router = require ('express').Router();
const fs = require('fs');
const uniqid = require('uniqid')

router.get('/api/notes', (req, res) => {
     fs.readFile('db/db.json', 'utf-8', (err, data) => {
        if (err) throw err
        return res.json(JSON.parse(data))
     })
});

router.post('/api/notes', (req, res) => {
    const noteData = JSON.parse(fs.readFileSync('db/db.json'))
    const newNote = req.body
    const id = 'id'
    const noteId = uniqid()
    newNote[id] = noteId
    noteData.push(newNote)
    fs.writeFile('db/db.json', JSON.stringify(noteData), (err) => {
        if (err) throw err
        res.json(noteData)
    })

});

router.delete('/api/notes/:id', (req, res) => {
    const noteData = JSON.parse(fs.readFileSync('db/db.json'))
    const delData = noteData.filter((note) => note.id !== req.params.id)
    fs.writeFileSync('db/db.json', JSON.stringify(delData))
        res.json(delData)
    
})

module.exports = router;