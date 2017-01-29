'use strict';

module.exports = {
  subdomain: process.env.SUBDOMAIN || '',
  email: process.env.EMAIL || '',
  password: process.env.PASSWORD || '',
  identifier: process.env.IDENTIFIER || '',
  secret: process.env.SECRET || '',
  user_agent: process.env.USER_AGENT || 'node-harvest test runner'
}