const DataPacket = require("./DataPacket");
const ProtocolInfo = require("../Info");

class CommandRequestPacket extends DataPacket {

    getId() {
        return ProtocolInfo.COMMAND_REQUEST_PACKET;
    }

    initVars() {
        this.command = "";
        this.originData = null;
        this.isInternal = false;
    }

    constructor() {
        super();
        this.initVars();
    }

    _decodePayload() {
        this.command = this.readString();
        this.originData = this.getCommandOriginData();
        this.isInternal = this.readBool();
    }

    _encodePayload() {
        this.writeString(this.command);
        this.putCommandOriginData(this.originData);
        this.writeBool(this.isInternal);
    }

    handle(session) {
        return session.handleCommandRequest(this);
    }
}

module.exports = CommandRequestPacket;