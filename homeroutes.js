const router = require('express').Router();
const {Project,User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res)) => {
try {
    //Get all projects and JOIN with user data
    const projectData = await Project.findALL({
        include:[

        ]

        }
        model: User,
        attributes: ['name'],
    })
}
}
