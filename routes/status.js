var express = require('express');
var router = express.Router();
var Status = require('../models/Status');


// Create a new status entry
router.post('/status', async(req, res, next) => {
    try {
        const status = new Status(req.body);
        await status.save();
        res.status(201).json(status);
      } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'Failed to create status' });
      }
});

// Get all status entries
router.get('/status', async(req, res, next) =>  {
    try {
        const statuss = await Status.find();
        res.json(statuss);
      } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve statuss' });
      }
});

//Get a specific status entry by ID
router.get('/status/:id', function(req, res, next)  {
  const id = req.params.id;
  const status = statusPage.find((s) => s.id === id);
  if (!status) {
    res.send(404).json({ message: 'Status entry not found' });
  } else {
    res.json(status);
  }
});

// Update a status entry by ID
router.put('/status/:id', function(req, res, next)  {
  const id = req.params.id;
  const updatedStatus = req.body;
  const index = statusPage.findIndex((s) => s.id === id);

  if (index === -1) {
    res.send(404).json({ message: 'Status entry not found' });
  } else {
    statusPage[index] = updatedStatus;
    res.json(updatedStatus);
  }
});

// Delete a status entry by ID
router.delete('/status/:id', function(req, res, next)  {
  const id = req.params.id;
  const index = statusPage.findIndex((s) => s.id === id);

  if (index === -1) {
    res.send(404).json({ message: 'Status entry not found' });
  } else {
    const deletedStatus = statusPage.splice(index, 1)[0];
    res.json(deletedStatus);
  }
});

module.exports = router;