"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = getOne;
exports.getOneDocuments = getOneDocuments;
const mockUsers = [
    {
        id: 1,
        firstName: 'George',
        lastName: 'Baba',
        country: 'ROU',
        documents: [
            {
                slug: 'birth-certificate',
                type: 'birth_certificate',
                label: 'documents:birth_certificate',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
    },
];
function getOne(req, res) {
    return res
        .status(200)
        .json(mockUsers.find((user) => user.id === parseInt(req.params.id)));
}
function getOneDocuments(req, res) {
    var _a;
    return res
        .status(200)
        .json((_a = mockUsers.find((user) => user.id === parseInt(req.params.id))) === null || _a === void 0 ? void 0 : _a.documents);
}
