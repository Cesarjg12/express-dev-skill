const Skill = require('../models/skill')

module.export = {
    index,
    show,
    new: newSkills,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  Skill.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
  const skill = Skill.getOne(req.params.id);
  res.render('skills/edit', {
    title: 'Edit Skill',
    skill
  });
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/skills');
}

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkills(req, res) {
  res.render('skills/new', { 
    title: 'New Skills' 
  });
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skills: Skill.getOne(req.params.id),
      title: 'Skill Details'
    });
  }