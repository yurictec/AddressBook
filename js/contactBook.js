var autoinc = 2;

var app = angular.module("app", ["xeditable"]);

app.run(function (editableOptions) {
    editableOptions.theme = 'bs3';
});

function ContactBookController($scope) {
    $scope.contacts = [
        {
            id: '1', surname: 'Ivanov', firstName: 'Ivan', patronymic: 'Ivanovich', brithDate: '1980-02-01',
            number: '+123456789', address: 'Belarus, Minsk', email: 'ivanIvanov@gmail.com'
        },
        {
            id: '2', surname: 'Petrova', firstName: 'Maria', patronymic: 'Andreevna', brithDate: '1990-02-03',
            number: '+987654321', address: 'Belarus, Minsk', email: 'petrovaM@gmail.com'
        }
    ];

    $scope.addContact = function () {
        if ($scope.surname && $scope.firstName && $scope.patronymic && $scope.brithDate
            && $scope.number && $scope.address && $scope.email) {
            $scope.contacts.push({
                id: ++autoinc, surname: $scope.surname, firstName: $scope.firstName,
                patronymic: $scope.patronymic, brithDate: $scope.brithDate, number: $scope.number,
                address: $scope.address, email: $scope.email
            });
            $scope.surname = '';
            $scope.firstName = '';
            $scope.patronymic = '';
            $scope.brithDate = '';
            $scope.number = '';
            $scope.address = '';
            $scope.email = '';
        }
    };

    $scope.removeContact = function (index) {
        $scope.contacts.splice(index, 1);
    };
    
    $scope.f = function () {
        
    }
}