let usedNames = [];

function addWord() {
    const newWord = document.getElementById('newWord').value.trim();
    if (newWord) {
        const textarea = document.getElementById('names');
        if (textarea.value) {
            textarea.value += '\n' + newWord;
        } else {
            textarea.value = newWord;
        }
        document.getElementById('newWord').value = '';
        document.getElementById('newWord').focus();
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generate() {
    const namesText = document.getElementById('names').value;
    const names = namesText.split('\n').filter(name => name.trim() !== '');
    
    if (names.length === 0) {
        document.getElementById('result').textContent = 'Добавьте хотя бы одно имя!';
        return;
    }

    const tables = Array.from({length: names.length}, (_, i) => `Стол ${i + 1}`);

    const shuffledNames = shuffle([...names]);

    let result = [];
    for (let i = 0; i < names.length; i++) {
        result.push(`${shuffledNames[i]} → ${tables[i]}`);
    }

    document.getElementById('result').innerHTML = result.join('<br>');
}