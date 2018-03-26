return Termini.find({});
  },
});

Template.body.events({
  'submit .nuovo-termine'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const tipologia = target.tipologia.value;
    const nome = target.nome.value;
    const nomeinglese = target.nomeinglese.value;
    const etimologia = target.etimologia.value;
    const illustrazioni = //Codice da scrivere!!
    const descrizione = target.descrizione.value;
    const categoria = target.categoria.value;
    const periodoecorrente = target.periodoecorrente.value;

    // Insert a task into the collection
    Termini.insert({
      tipologia, nome, nomeinglese, etimologia, illustrazioni, descrizione, categoria, periodoecorrente,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.tipologia.value = '';
    target.nome.value = '';
    target.nomeinglese.value = '';
    target.etimologia.value = '';
    illustrazioni //da scrivere ancora
    target.descrizione.value = '';
    target.categoria.value = '';
    target.periodoecorrente.value = '';
  },
});

Template.body.helpers({
  termini() {
    // Show newest tasks at the top
    return Termini.find({}, { sort: { createdAt: -1 } });
  },
});
