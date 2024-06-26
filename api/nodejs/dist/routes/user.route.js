"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/:id', user_controller_1.getOne);
router.get('/:id/documents', user_controller_1.getOneDocuments);
exports.default = router;
