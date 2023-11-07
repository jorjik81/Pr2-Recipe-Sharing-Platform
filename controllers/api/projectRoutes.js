const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const { name, needed_ingredients, description } = req.body; // Destructure the fields

    const newProject = await Project.create({
      name, // Use the destructured variables
      needed_ingredients, // Include needed_ingredients
      description, // Use the destructured variables
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    

    const [updatedProject] = await Project.update(  req.body, {
      where:{
        id:req.params.id,
      },

  
    });

    if (!updatedProject[0]) {
      res.status(404).json({ message: 'No project found with this id' });
      return;
    }

    res.status(200).json({ message: 'Project updated successfully' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
