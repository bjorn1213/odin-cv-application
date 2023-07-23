import {v4 as uuid} from 'uuid'

function itemGenerator(startDate, endDate, title, institution, description) {
    return {
        id: uuid(),
        startDate: startDate,
        endDate: endDate,
        title: title,
        institution: institution,
        description: description
    }
}

const workItems = [
    itemGenerator(
        new Date(2019, 1, 1),
        new Date(2020, 1, 1),
        "Job X",
        "Location X",
        null
    ),
    itemGenerator(
        new Date(2018, 1, 1),
        new Date(2019, 1, 1),
        "Job Y",
        "Location Y",
        "Description for Y"
    ),
    itemGenerator(
        new Date(2020, 1, 1),
        null,
        "Job Z",
        "Location Z",
        null
    ),
]

const eduItems = [
    itemGenerator(
        new Date(2014, 1, 1),
        new Date(2015, 1, 1),
        "Prep course",
        "Remote via XXX",
        null
    ),
    itemGenerator(
        new Date(2015, 1, 1),
        new Date(2018, 1, 1),
        "Main education",
        "Main university",
        null
    ),
]

const personalData = {
    name: "My Name",
    emailAddress: "email@address.com",
    phoneNumber: "06-12345678",
    description: "Phasellus tincidunt turpis tellus, non imperdiet justo eleifend eget. Cras in magna vitae sem ultrices lobortis a sed ante. Integer posuere tincidunt auctor. Suspendisse non nulla varius, sodales enim nec, hendrerit nisi. Phasellus vel dolor est. Nunc interdum, turpis a sodales aliquet, lacus libero aliquam libero, id vehicula ligula quam maximus libero. Suspendisse potenti."
}

const entryData = {
    workItems,
    eduItems,
    personalData
}

export default entryData;