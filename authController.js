const supabase = require('../config/supabaseClient');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      
      // Check if user exists
      const { data: existing } = await supabase.from('users').select('id').eq('email', email).single();
      if (existing) return res.status(400).json({ success: false, message: 'Email already registered' });

      // Hash password & Insert
      const hashed = await bcrypt.hash(password, 12);
      const { data, error } = await supabase.from('users').insert({ name, email, password: hashed }).select('id, name, email').single();
      if (error) throw error;

      // Generate Token
      const token = jwt.sign({ id: data.id, email: data.email }, process.env.JWT_SECRET, { expiresIn: '14d' });
      res.status(201).json({ success: true, message: 'Identity secured', token, user: data });
    } catch (err) { next(err); }
  },

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      
      const { data: user, error } = await supabase.from('users').select('*').eq('email', email).single();
      if (error || !user) return res.status(401).json({ success: false, message: 'Invalid credentials' });

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return res.status(401).json({ success: false, message: 'Invalid credentials' });

      const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '14d' });
      res.status(200).json({ success: true, message: 'Access granted', token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) { next(err); }
  }
};

module.exports = authController;