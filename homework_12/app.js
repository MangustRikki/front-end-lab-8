const model = {
    currentPerson: {},
    allPersons: [{
            name: 'Lily Butler',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
        },
        {
            name: 'Waller Perry',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
        },
        {
            name: 'Tammi Donovan',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
        },
        {
            name: 'Doreen Flowers',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
        },
        {
            name: 'Price Pace',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
        },
        {
            name: 'Larson Maldonado',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
        },
        {
            name: 'Berg Bolton',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
        },
        {
            name: 'Mack Lott',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
        },
        {
            name: 'Rosanna Mcleod',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
        },
        {
            name: 'Rosalie Rice',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
        },
        {
            name: 'Virginia Buchanan',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
        },
        {
            name: 'Lorna Stein',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
        },
        {
            name: 'Rosalie Steele',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
        },
        {
            name: 'Wilcox Boyd',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
        },
        {
            name: 'Ollie Rice',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
        }
    ]
};

const control = {
    init: function () {
        sortView.init();
        listView.init();
        scoresView.init();
    },
    getAllNames: function () {
        return model.allPersons.map(x => x.name);
    },
    getAllScores: function () {
        return model.allPersons.map(x => x.score);
    },
    setCurrentPerson: function (index) {
        model.currentPerson = Object.assign(model.allPersons[index]);
    },
    getCurrentPerson: function () {
        return model.currentPerson;
    },
    viewCurrentProfile: function () {
        profileView.init();
    },
    setCurrentPersonScore: function (value) {
        this.getCurrentPerson().score = value;
    },
    sortBy: function(arr, sortBy, direction) {
            if(direction === "toUp") {
                arr.sort( (a, b) => {
                    if (a[sortBy] > b[sortBy]) {
                        return 1;
                      }
                      if (a[sortBy] < b[sortBy]) {
                        return -1;
                      }
                      return 0;
                })
            }
                else if(direction === 'toLower'){
                    arr.sort( (a, b) => {
                        if (a[sortBy] < b[sortBy]) {
                            return 1;
                          }
                          if (a[sortBy] > b[sortBy]) {
                            return -1;
                          }
                          return 0;
                    });
            }
            listView.init();
            scoresView.init();
            console.log(model.allPersons);
    }
    
};

const listView = {
    init: function () {
        $(".names").html(this.render());
        this.handleClicks();
    },
    render: function () {
        let namesList = "";
        
        control.getAllNames().forEach((x, i) => {
            namesList += `<li data-id = ${i}>${x}</li>`;
        });
        return namesList;
    },
    handleClicks: function () {
        let namesList = document.querySelector('.names');
        namesList.addEventListener("click", (e) => {
            control.setCurrentPerson(e.target.dataset.id);
            control.viewCurrentProfile();
        });
    }
};


const scoresView = {
    init: function () {
        $(".scores").html(this.render());
        this.handleClicks();
    },
    render: function () {
        let scoreList = "";
        control.getAllScores().forEach((x, i) => {
            scoreList += `<li data-id = ${i}>
        <span class='score-value'>${x}</span>
        <input type='text' class='score-input' hidden>
        </li>`;
        });
        return scoreList;
    },
    handleClicks: function () {
        let scoreList = document.querySelector('.scores');

        scoreList.addEventListener("click", (e) => {
            let $target = $(e.target),
                $targetInput = $target.find('.score-input');
            $targetInput.removeAttr('hidden').focus();
            $currentScore = $target.find('.score-value');
            $targetInput.val($currentScore.html());
            $targetInput.on('focusout .score-input', () => {
                let $value = $targetInput.val();
                if ($value === "") {
                    $targetInput.attr('hidden', 'true');
                }
                if ($.isNumeric($value)) {
                    $currentScore.html($targetInput.val());
                    $targetInput.attr('hidden', 'true');
                } else {
                    $targetInput.attr('hidden', 'true');
                    console.log("You shoud type correct scores!");
                }
            });
        })
    }
};

const sortView = {
    init: function() {
        this.render();
        this.handleClicks();
    },
    render: function() {
        let  controls = `<li class="sortByName">Name</li>
                        <li class="sortByScores">Score</li>`;
        $('.sort-controls').html(controls);
    },
    handleClicks: function() {
        const sortByName = document.querySelector('.sortByName'),
            sortByScores = document.querySelector('.sortByScores');
        let direction = 'toUp';

            sortByName.addEventListener('click', (e) => {
                control.sortBy(model.allPersons, 'name', direction);
                if(direction === "toUp") {
                    direction = "toLower";
                }
                else {
                    direction = "toUp";
                }
            });

            sortByScores.addEventListener('click', (e) => {
                control.sortBy(model.allPersons, 'score', direction);
                if(direction === "toUp") {
                    direction = "toLower";
                }
                else {
                    direction = "toUp";
                }
            });
            
    }
};


const profileView = {
    init: function () {
        $('.profile').html(this.render());
    },
    render: function () {
        let currentPerson = control.getCurrentPerson();

        return `<img src="${currentPerson.photoUrl}"><img>
              <h3>${currentPerson.name}</h3>
              <p>${currentPerson.score}</p>`;
    }
};

control.init();
