(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-lists/chat-lists.template.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-lists/chat-lists.template.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatMainChatListsChatListsTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-search [data]=\"chatLists\" [fieldToFilter]=\"'chatName'\" (filterData)=\"filterLists = $event\"></app-search>\n<ul class=\"chat-lists\">\n  <li *ngFor=\"let chat of filterLists\" (click)=\"openChat({chatId: chat._id})\" [ngClass]=\"{'active-chat': selectedChatId === chat._id}\">\n    <app-chat-preview [chat]=\"chat\" [activeUser]=\"activeUser\"></app-chat-preview>\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.template.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.template.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatMainChatListsChatPreviewChatPreviewTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chat-preview\">\n  <app-user-avatar *ngIf=\"chat || chatName\" [avatarUrl]=\"chat.avatar.url\" [chatName]=\"chat.chatName\" [type]=\"'chat'\"></app-user-avatar>\n  <div class=\"chat-data\">\n    <div class=\"chat-info\">\n      <span class=\"chat-name\">{{chat.chatName}}</span>\n      <span class=\"chat-date\">{{chat.lastMessage ? (chat.lastMessage.createdAt | date:'shortTime') : ''}}</span>\n    </div>\n    <p class=\"chat-message\">{{chat.lastMessage ? (chat.lastMessage.authorId.username + ': ' + chat.lastMessage.message) : 'This chat is empty.'}}</p>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-main.template.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-main.template.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatMainChatMainTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chat-container\" *ngIf=\"authService.userData.id\">\n  <app-header></app-header>\n  <div class=\"chat-main\">\n    <app-chat-lists></app-chat-lists>\n    <app-chat-messages></app-chat-messages>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/chat-messages.template.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/chat-messages.template.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatMainChatMessagesChatMessagesTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chat-messages-container\" *ngIf=\"chatService.activeChat && chatService.activeChat._id\">\n  <app-messages-list [ngClass]=\"{'without-editor': !showEditor}\" (selectMessage)=\"selectMessage($event)\" [messages]=\"messages\" (scrollMessages)=\"getMessages()\"></app-messages-list>\n  <app-editor *ngIf=\"!selectedMessages.length && showEditor\"></app-editor>\n  <app-message-select *ngIf=\"selectedMessages.length && showEditor\" [messages]=\"selectedMessages\"></app-message-select>\n</div>\n<div class=\"select-chat\" *ngIf=\"!chatService.activeChat || !chatService.activeChat._id\">\n  <p>Please select a chat to start messaging</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/editor/editor.template.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/editor/editor.template.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatMainChatMessagesEditorEditorTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"editor-container\">\n  <p class=\"typing\" *ngIf=\"usersTyping.length === 1\">{{usersTyping[0]}} is typing...</p>\n  <p class=\"typing\" *ngIf=\"usersTyping.length > 1\">{{usersTyping.length}} persons are typing...</p>\n  <div class=\"editor-input-container\">\n    <div class=\"img-container\">\n      <app-user-avatar [chatName]=\"authService.userData.username\" [avatarUrl]=\"authService.userData.avatar\" (click)=\"openModal('profile')\"></app-user-avatar>\n    </div>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Message</mat-label>\n      <textarea matInput [(ngModel)]=\"message\" (keydown)=\"typingMessage()\" (keydown.enter)=\"sendMessage($event)\"></textarea>\n    </mat-form-field>\n    <div class=\"img-container\">\n      <app-user-avatar [chatName]=\"chatService.activeChat.chatName\" [avatarUrl]=\"chatService.activeChat.avatar.url\" (click)=\"openModal('chat')\"></app-user-avatar>\n    </div>\n  </div>\n  <button class=\"send-message\" mat-button (click)=\"sendMessage()\">Send</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/message-select/message-select.template.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/message-select/message-select.template.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatMainChatMessagesMessageSelectMessageSelectTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"message-select-container\">\n  <button mat-menu-item class=\"delete-button\" (click)=\"deleteMessages()\">Delete</button>\n  <button mat-menu-item class=\"cancel-button\" (click)=\"clearSelection()\">Cancel</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/messages-list/message/message.template.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/messages-list/message/message.template.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatMainChatMessagesMessagesListMessageMessageTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"single-message-container\" [ngClass]=\"{'active': message.selected}\">\n  <div class=\"message-selector-container\">\n    <mat-icon [ngClass]=\"{'hover': !message.selected}\">check_box</mat-icon>\n  </div>\n  <app-user-avatar *ngIf=\"message.messageType !== REPORT\" (click)=\"openProfile($event)\" [chatName]=\"message.user.username\" [avatarUrl]=\"message.user.avatar\" [type]=\"'chat'\"></app-user-avatar>\n  <div class=\"message-details-container\">\n    <div class=\"author-container\">\n      <h1 *ngIf=\"message.messageType !== REPORT\" class=\"author\">{{message.user.username}}</h1>\n      <span class=\"date\">{{message.date | date:'shortTime'}}</span>\n    </div>\n    <div class=\"message-container\">\n      <p [ngClass]=\"{'report-message': message.messageType === REPORT}\" class=\"message\">{{message.message}}</p>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/messages-list/messages-list.template.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/messages-list/messages-list.template.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsChatMainChatMessagesMessagesListMessagesListTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n        class=\"message-list-container\"\n        id=\"msgContainer\"\n        infiniteScroll\n        [infiniteScrollDistance]=\"10\"\n        [infiniteScrollThrottle]=\"20\"\n        (scrolledUp)=\"onScrollUp()\"\n        [scrollWindow]=\"false\">\n  <app-message\n    *ngFor=\"let message of messages\"\n    [ngClass]=\"{'report': message.messageType === REPORT}\"\n    [message]=\"message\" (click)=\"select(message._id)\">{{message.messageType}}</app-message>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.template.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.template.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"header\">\n  <app-menu class=\"header-menu\"></app-menu>\n  <button class=\"chat-name\" mat-button (click)=\"openChatSetting()\" *ngIf=\"chatService.activeChat\">\n    <span>{{chatService.activeChat.chatName}}</span>\n    <span *ngIf=\"chatService.activeChat.chatType !== 'DIALOG' && chatService.activeChat.users\"\n          class=\"members-count\">{{chatService.activeChat.users}} members</span>\n  </button>\n</mat-toolbar>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/menu/menu.template.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/menu/menu.template.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderMenuMenuTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-menu-container\">\n  <button class=\"header-menu-button\" mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n  <mat-menu class=\"header-menu\" #menu [overlapTrigger]=\"false\">\n    <button mat-menu-item (click)=\"openModal('New group')\">\n      <mat-icon>group</mat-icon>\n      <span>New group</span>\n    </button>\n    <button mat-menu-item (click)=\"openModal('Contacts')\">\n      <mat-icon>chat</mat-icon>\n      <span>New single chat</span>\n    </button>\n    <button mat-menu-item (click)=\"openModal('New channel')\">\n      <mat-icon>record_voice_over</mat-icon>\n      <span>New channel</span>\n    </button>\n  <button mat-menu-item (click)=\"openModal('Settings')\">\n      <mat-icon>settings</mat-icon>\n      <span>Settings</span>\n    </button>\n  </mat-menu>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.template.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.template.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1 class=\"auth-title\">Login</h1>\n  <form [formGroup]=\"form.formGroup\" class=\"auth-form\" (ngSubmit)=\"login()\">\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Username\" formControlName=\"username\">\n      <mat-error *ngIf=\"form.getControl('username').hasError('required')\">\n        Username is required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      <mat-error *ngIf=\"form.getControl('password').hasError('required')\">\n        Password is required\n      </mat-error>\n    </mat-form-field>\n    <p class=\"error-message\">{{loginError}}</p>\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"form.formGroup.invalid\">Submit</button>\n    <button routerLink=\"/registration\" mat-raised-button color=\"primary\">Go to Registration</button>\n  </form>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chanel-settings/chanel-settings.template.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chanel-settings/chanel-settings.template.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsChatInformationChanelSettingsChanelSettingsTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"channel-settings\">\n  <div class=\"channel-description\">\n    <mat-icon>info</mat-icon>\n    <p>{{description || 'Description about channel'}}</p>\n  </div>\n  <div *ngIf=\"!editChat\" class=\"channel-actions\">\n    <mat-icon>reorder</mat-icon>\n    <span class=\"link\" (click)=\"leaveChannel()\">Leave channel</span>\n  </div>\n  <div *ngIf=\"editChat\" class=\"channel-actions\">\n    <mat-icon>remove_circle</mat-icon>\n    <span class=\"link\" (click)=\"deleteChannel()\">Delete channel</span>\n  </div>\n  <app-chat-settings *ngIf=\"editChat\" [chatUsers]=\"chatUsers\" [editChat]=\"editChat\" [isChannel]=\"true\"></app-chat-settings>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chat-information.template.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chat-information.template.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsChatInformationChatInformationTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-modal-header\n  [data]=\"{\n    editChat: data.editChat,\n    title: data.title,\n    name: chatName,\n    description: channelDescription,\n    type: data.type,\n    chatId: data.chatId\n  }\"\n  (closeDialog)=\"closeModel()\">\n</app-modal-header>\n<app-header-info\n  [data] = \"{\n    name: chatName,\n    image: image,\n    editChat: data.editChat,\n    type: data.type,\n    chatId: data.chatId\n  }\">\n</app-header-info>\n\n<app-profile-settings *ngIf=\"data.type === chatTypes.PROFILE\"></app-profile-settings>\n<app-contact-settings *ngIf=\"data.type === chatTypes.DIALOG\" [contactId]=\"data.chatId\" [username]=\"chatName\"></app-contact-settings>\n<app-chat-settings *ngIf=\"data.type === chatTypes.GROUP\" [editChat]=\"data.editChat\" [chatUsers]=\"chatUsers\"></app-chat-settings>\n<app-chanel-settings\n  *ngIf=\"data.type === chatTypes.CHANNEL\"\n  [editChat]=\"data.editChat\"\n  [description]=\"channelDescription\"\n  [chatUsers]=\"chatUsers\"\n></app-chanel-settings>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chat-settings/chat-settings.template.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chat-settings/chat-settings.template.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsChatInformationChatSettingsChatSettingsTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chat-settings\">\n  <div class=\"add-member\">\n    <mat-icon>person</mat-icon>\n    <span class=\"link\" (click)=\"openContacts()\">Add members</span>\n  </div>\n  <div class=\"users-chat\">\n    <mat-icon>reorder</mat-icon>\n    <ul class=\"users-chat-list\">\n      <li *ngFor=\"let user of chatUsers\">\n        <app-user-avatar [avatarUrl]=\"user.avatar.url\" [chatName]=\"user.username\" [type]=\"'chat'\"></app-user-avatar>\n        <div class=\"user-info\">\n          <p class=\"link\" (click)=\"openProfile(user._id)\">{{user.username}}</p>\n          <p *ngIf=\"editChat && userId !== user._id\" (click)=\"removeUser(user._id)\" class=\"link\">Remove</p>\n          <p *ngIf=\"userId === user._id && !isChannel\" (click)=\"removeUser(user._id)\" class=\"link\">Delete and exit</p>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/contact-settings/contact-settings.template.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/contact-settings/contact-settings.template.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsChatInformationContactSettingsContactSettingsTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contact-info\">\n  <mat-icon>reorder</mat-icon>\n  <span class=\"link\" *ngIf=\"!isContact\" (click)=\"addContact()\">Add contact</span>\n  <span class=\"link\" *ngIf=\"isContact\" (click)=\"deleteContact()\">Delete contact</span>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/profile-settings/profile-settings.template.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/profile-settings/profile-settings.template.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsChatInformationProfileSettingsProfileSettingsTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-info-container\">\n  <button mat-menu-item (click)=\"logout()\">\n    <mat-icon>exit_to_app</mat-icon>\n    <span>Log out</span>\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/edit-name/edit-name.template.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/edit-name/edit-name.template.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsEditNameEditNameTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"edit-name-container\">\n  <h1>{{(data.action === 'create' ? 'Create ' : 'Edit ') + data.type}}</h1>\n  <mat-form-field>\n    <mat-label>Name</mat-label>\n    <input matInput [(ngModel)]=\"data.name\">\n  </mat-form-field>\n  <mat-form-field *ngIf=\"data.type === chatTypes.CHANNEL\">\n    <mat-label>Description</mat-label>\n    <input matInput [(ngModel)]=\"data.description\">\n  </mat-form-field>\n  <p class=\"error-message\">{{updateError}}</p>\n  <div class=\"edit-name-controls\">\n    <button class=\"edit-name-button\" mat-menu-item (click)=\"create()\" [disabled]=\"!data.name\">Save</button>\n    <button class=\"edit-name-button\" mat-menu-item (click)=\"close()\">Cancel</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/header-info/header-info.template.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/header-info/header-info.template.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsHeaderInfoHeaderInfoTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-header-container\">\n  <div class=\"profile-header-info-container\">\n    <div class=\"profile-image-container\" [ngClass]=\"{'with-remove-icon': showRemoveIcon}\" (mouseover)=\"handleRemoveIcon(true)\" (mouseout)=\"handleRemoveIcon(false)\">\n      <div class=\"img-container\">\n        <div *ngIf=\"data.editChat\" class=\"remove-image\" (click)=\"removeImage()\">x</div>\n        <app-user-avatar [chatName]=\"data.name\" [avatarUrl]=\"imageSrc || data.image\" [type]=\"'profile'\"></app-user-avatar>\n      </div>\n    </div>\n    <div class=\"profile-name-container\">\n      <span class=\"profile-username\">{{data.name}}</span>\n    </div>\n  </div>\n  <div *ngIf=\"data.editChat\" class=\"select-image-container\">\n    <mat-icon>add_a_photo</mat-icon>\n    <mat-form-field class=\"select-image-field\" (change)=\"selectImage($event)\">\n      <ngx-mat-file-input accept=\"'.png,.jpg,.jpeg.gif'\"></ngx-mat-file-input>\n    </mat-form-field>\n  </div>\n  <div *ngIf=\"!data.editChat && showMessageIcon\" class=\"select-chat-container\">\n    <mat-icon (click)=\"openChat()\">chat</mat-icon>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/message-modal/message-modal.template.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/message-modal/message-modal.template.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsMessageModalMessageModalTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"message-modal-container\">\n  <h1>{{data.message}}</h1>\n  <div class=\"controls-container\">\n    <button mat-menu-item class=\"submit\" (click)=\"close(true)\">Ok</button>\n    <button mat-menu-item  class=\"cancel\" (click)=\"close(false)\">Cancel</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/modals-header/modal-header.template.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/modals-header/modal-header.template.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsModalsHeaderModalHeaderTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-header-container\">\n  <span class=\"modal-header-title\">{{data.title}}</span>\n  <div class=\"modal-header-actions\">\n    <span *ngIf=\"data.editChat\" (click)=\"editProfileData()\">Edit</span>\n    <span (click)=\"closeProfile()\">Close</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.template.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.template.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsNewChatNewChatFooterNewChatFooterTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"new-chat-footer-container\">\n  <button class=\"new-chat-footer-button\" mat-menu-item (click)=\"createChat()\">Save</button>\n  <button class=\"new-chat-footer-button\" mat-menu-item (click)=\"close()\">Cancel</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/new-chat.template.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/new-chat.template.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsNewChatNewChatTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-modal-header [data]=\"{title: data.type}\" (closeDialog)=\"closeModal()\"></app-modal-header>\n<app-select-users [type]=\"data.type\" [users]=\"users\" [usersFilter]=\"usersFilter\" (selectUser)=\"selectUser($event)\"></app-select-users>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/select-users/select-users.template.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/select-users/select-users.template.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsNewChatSelectUsersSelectUsersTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"select-users-container\">\n  <app-search [data]=\"users\" [fieldToFilter]=\"'username'\" (filterData)=\"usersFilter = $event\"></app-search>\n  <div class=\"users-list-container\">\n    <app-users-list (selectUser)=\"select($event)\" [users]=\"usersFilter\"></app-users-list>\n  </div>\n  <app-new-chat-footer [type]=\"type\"></app-new-chat-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/user-contacts/new-contact/new-contact.template.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/user-contacts/new-contact/new-contact.template.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsUserContactsNewContactNewContactTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"new-contact\">\n  <h1>Add new contact</h1>\n  <mat-form-field>\n    <mat-label>Username</mat-label>\n    <input type=\"text\" matInput [(ngModel)]=\"username\">\n  </mat-form-field>\n  <p class=\"error-message\">{{addContactError}}</p>\n  <div class=\"new-contact-controls\">\n    <button class=\"new-contact-button\" mat-menu-item (click)=\"addContact()\" [disabled]=\"!username || username === authService.userData.username\">Save</button>\n    <button class=\"new-contact-button\" mat-menu-item (click)=\"close()\">Cancel</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/user-contacts/user-contacts.template.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/user-contacts/user-contacts.template.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModalsUserContactsUserContactsTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-modal-header [data]=\"{title: 'Contacts'}\" (closeDialog)=\"closeModel()\"></app-modal-header>\n<div class=\"select-users-container\">\n  <app-search [data]=\"users\" [fieldToFilter]=\"'username'\" (filterData)=\"usersFilter = $event\"></app-search>\n  <div class=\"users-list-container\">\n    <app-users-list (selectUser)=\"selectUser($event)\" [users]=\"usersFilter\"></app-users-list>\n  </div>\n</div>\n<div class=\"new-contact\">\n  <button class=\"new-contact-button\" mat-menu-item (click)=\"openAddContactWindow()\">\n    <span>Add New Contact</span>\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.template.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.template.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegistrationRegistrationTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <h1 class=\"auth-title\">Registration</h1>\n  <form [formGroup]=\"form.formGroup\" class=\"auth-form\" (ngSubmit)=\"register()\">\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Username\" formControlName=\"username\">\n      <mat-error *ngIf=\"form.getControl('username').hasError('required')\">\n        Username is required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      <mat-error *ngIf=\"form.getControl('password').hasError('pattern') && !form.getControl('password').hasError('required')\">\n        Minimum 8 characters, at least one letter and number\n      </mat-error>\n      <mat-error *ngIf=\"form.getControl('password').hasError('required')\">\n        Password is required\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"password\" placeholder=\"Confirm password\" formControlName=\"confirmPassword\">\n      <mat-error *ngIf=\"form.getControl('confirmPassword').hasError('required')\">\n        Confirm password is required\n      </mat-error>\n    </mat-form-field>\n    <p class=\"error-message\">{{registerError}}</p>\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"form.formGroup.invalid\">Submit</button>\n    <button routerLink=\"/login\" mat-raised-button color=\"primary\">Go to login</button>\n  </form>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.template.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.template.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchSearchTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input type=\"text\" class=\"input-search\" placeholder=\"Search\" (input)=\"search($event.target.value)\">\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-avatar/user-avatar.template.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-avatar/user-avatar.template.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUserAvatarUserAvatarTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img *ngIf=\"avatarUrl\" [ngClass]=\"{'header-avatar': type !== 'chat'}\" [src]=\"avatarUrl\" class=\"avatar\" alt=\"avatar\">\n<div *ngIf=\"!avatarUrl\" [ngClass]=\"{'header-avatar': type !== 'chat'}\" class=\"avatar\"><span>{{chatName ? chatName[0] : 'T' | uppercase}}</span></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/user/user.template.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/user/user.template.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersListUserUserTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"single-user\" [ngClass]=\"{'selected': user.selected, 'blurred': user.blurred}\">\n  <app-user-avatar [chatName]=\"user.username\" [avatarUrl]=\"user.avatar\" [type]=\"'chat'\"></app-user-avatar>\n  <div class=\"username-container\">\n    <span class=\"username\">{{user.username}}</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/users-list.template.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/users-list.template.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersListUsersListTemplateHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"search-users-container\">\n  <app-user *ngFor=\"let user of users\" [user]=\"user\" (click)=\"select(user._id)\" [ngClass]=\"{'blurred': user.blurred}\"></app-user>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/actions/main.action.ts":
  /*!****************************************!*\
    !*** ./src/app/actions/main.action.ts ***!
    \****************************************/

  /*! exports provided: SELECT_CHAT, OPEN_CHAT, UPDATE_CHAT_INFO, CLOSE_NEW_CHAT_MODAL, CLOSE_CHAT_SETTINGS_MODAL, CREATE_NEW_CHAT, ADD_NEW_CHAT, ADD_MEMBERS, UPDATE_MEMBERS, CLEAR_SELECT_MESSAGE, UPDATE_CHAT_MESSAGE, SHOW_CHAT_ICON, EDIT_INFO_ERROR, SCROLL_DOWN */

  /***/
  function srcAppActionsMainActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SELECT_CHAT", function () {
      return SELECT_CHAT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OPEN_CHAT", function () {
      return OPEN_CHAT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_CHAT_INFO", function () {
      return UPDATE_CHAT_INFO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLOSE_NEW_CHAT_MODAL", function () {
      return CLOSE_NEW_CHAT_MODAL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLOSE_CHAT_SETTINGS_MODAL", function () {
      return CLOSE_CHAT_SETTINGS_MODAL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CREATE_NEW_CHAT", function () {
      return CREATE_NEW_CHAT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_NEW_CHAT", function () {
      return ADD_NEW_CHAT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADD_MEMBERS", function () {
      return ADD_MEMBERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_MEMBERS", function () {
      return UPDATE_MEMBERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CLEAR_SELECT_MESSAGE", function () {
      return CLEAR_SELECT_MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UPDATE_CHAT_MESSAGE", function () {
      return UPDATE_CHAT_MESSAGE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SHOW_CHAT_ICON", function () {
      return SHOW_CHAT_ICON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EDIT_INFO_ERROR", function () {
      return EDIT_INFO_ERROR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_DOWN", function () {
      return SCROLL_DOWN;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    const SELECT_CHAT = 'SELECT_CHAT';
    const OPEN_CHAT = 'OPEN_CHAT';
    const UPDATE_CHAT_INFO = 'UPDATE_CHAT_INFO';
    const CLOSE_NEW_CHAT_MODAL = 'CLOSE_NEW_CHAT_MODAL';
    const CLOSE_CHAT_SETTINGS_MODAL = 'CLOSE_CHAT_SETTINGS_MODAL';
    const CREATE_NEW_CHAT = 'CREATE_NEW_CHAT';
    const ADD_NEW_CHAT = 'ADD_NEW_CHAT';
    const ADD_MEMBERS = 'ADD_MEMBERS';
    const UPDATE_MEMBERS = 'UPDATE_MEMBERS';
    const CLEAR_SELECT_MESSAGE = 'CLEAR_SELECT_MESSAGE';
    const UPDATE_CHAT_MESSAGE = 'UPDATE_CHAT_MESSAGE';
    const SHOW_CHAT_ICON = 'HIDE_CHAT_ICON';
    const EDIT_INFO_ERROR = 'EDIT_INFO_ERROR';
    const SCROLL_DOWN = 'SCROLL_DOWN';
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guards/authentication-guard */
    "./src/app/guards/authentication-guard.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/registration/registration.component */
    "./src/app/components/registration/registration.component.ts");
    /* harmony import */


    var _components_chat_main_chat_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/chat-main/chat-main.component */
    "./src/app/components/chat-main/chat-main.component.ts");

    const routes = [{
      path: '',
      component: _components_chat_main_chat_main_component__WEBPACK_IMPORTED_MODULE_6__["ChatMainComponent"],
      canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]]
    }, {
      path: 'login',
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'registration',
      component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-menu-panel.mat-menu-panel {\n  background-color: #5580a3 !important;\n  box-shadow: none !important;\n  color: #ffffff !important;\n  border-radius: 0 !important;\n}\n.mat-menu-panel.mat-menu-panel .mat-menu-item {\n  color: #ffffff !important;\n}\nmat-dialog-container {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNDRjtBREFFO0VBQ0UseUJBQUE7QUNFSjtBREVBO0VBQ0UscUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbWVudS1wYW5lbC5tYXQtbWVudS1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTgwYTMgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB9XG59XG5cbm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuIiwiLm1hdC1tZW51LXBhbmVsLm1hdC1tZW51LXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ODBhMyAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbi5tYXQtbWVudS1wYW5lbC5tYXQtbWVudS1wYW5lbCAubWF0LW1lbnUtaXRlbSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AppComponent = class AppComponent {
      constructor(router, authService, api) {
        this.router = router;
        this.authService = authService;
        this.api = api;
        this.title = 'chat';
      }

      ngOnInit() {
        if (this.authService.loggedIn()) {
          this.api.get({
            url: '/users/get-one'
          }).subscribe(res => this.authService.setUserData(res), () => this.authService.logout());
        }
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-material-file-input */
    "./node_modules/ngx-material-file-input/fesm2015/ngx-material-file-input.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./interceptors/auth.interceptor */
    "./src/app/interceptors/auth.interceptor.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/registration/registration.component */
    "./src/app/components/registration/registration.component.ts");
    /* harmony import */


    var _components_chat_main_chat_lists_chat_lists_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/chat-main/chat-lists/chat-lists.component */
    "./src/app/components/chat-main/chat-lists/chat-lists.component.ts");
    /* harmony import */


    var _components_chat_main_chat_main_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/chat-main/chat-main.component */
    "./src/app/components/chat-main/chat-main.component.ts");
    /* harmony import */


    var _components_chat_main_chat_messages_chat_messages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/chat-main/chat-messages/chat-messages.component */
    "./src/app/components/chat-main/chat-messages/chat-messages.component.ts");
    /* harmony import */


    var _components_chat_main_chat_lists_chat_preview_chat_preview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/chat-main/chat-lists/chat-preview/chat-preview.component */
    "./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_modals_header_info_header_info_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/modals/header-info/header-info.component */
    "./src/app/components/modals/header-info/header-info.component.ts");
    /* harmony import */


    var _components_modals_chat_information_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/modals/chat-information/profile-settings/profile-settings.component */
    "./src/app/components/modals/chat-information/profile-settings/profile-settings.component.ts");
    /* harmony import */


    var _components_header_menu_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/header/menu/menu.component */
    "./src/app/components/header/menu/menu.component.ts");
    /* harmony import */


    var _components_modals_chat_information_chat_settings_chat_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/modals/chat-information/chat-settings/chat-settings.component */
    "./src/app/components/modals/chat-information/chat-settings/chat-settings.component.ts");
    /* harmony import */


    var _components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/user-avatar/user-avatar.component */
    "./src/app/components/user-avatar/user-avatar.component.ts");
    /* harmony import */


    var _components_modals_modals_header_modal_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/modals/modals-header/modal-header.component */
    "./src/app/components/modals/modals-header/modal-header.component.ts");
    /* harmony import */


    var _components_chat_main_chat_messages_editor_editor_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/chat-main/chat-messages/editor/editor.component */
    "./src/app/components/chat-main/chat-messages/editor/editor.component.ts");
    /* harmony import */


    var _components_modals_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/modals/new-chat/new-chat.component */
    "./src/app/components/modals/new-chat/new-chat.component.ts");
    /* harmony import */


    var _components_modals_new_chat_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/modals/new-chat/select-users/select-users.component */
    "./src/app/components/modals/new-chat/select-users/select-users.component.ts");
    /* harmony import */


    var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/users-list/users-list.component */
    "./src/app/components/users-list/users-list.component.ts");
    /* harmony import */


    var _components_users_list_user_user_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/users-list/user/user.component */
    "./src/app/components/users-list/user/user.component.ts");
    /* harmony import */


    var _components_modals_new_chat_new_chat_footer_new_chat_footer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/modals/new-chat/new-chat-footer/new-chat-footer.component */
    "./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.component.ts");
    /* harmony import */


    var _components_modals_edit_name_edit_name_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/modals/edit-name/edit-name.component */
    "./src/app/components/modals/edit-name/edit-name.component.ts");
    /* harmony import */


    var _components_chat_main_chat_messages_messages_list_messages_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/chat-main/chat-messages/messages-list/messages-list.component */
    "./src/app/components/chat-main/chat-messages/messages-list/messages-list.component.ts");
    /* harmony import */


    var _components_chat_main_chat_messages_messages_list_message_message_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/chat-main/chat-messages/messages-list/message/message.component */
    "./src/app/components/chat-main/chat-messages/messages-list/message/message.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _components_modals_chat_information_contact_settings_contact_settings_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/modals/chat-information/contact-settings/contact-settings.component */
    "./src/app/components/modals/chat-information/contact-settings/contact-settings.component.ts");
    /* harmony import */


    var _components_modals_chat_information_chanel_settings_chanel_settings_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/modals/chat-information/chanel-settings/chanel-settings.component */
    "./src/app/components/modals/chat-information/chanel-settings/chanel-settings.component.ts");
    /* harmony import */


    var _components_modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/modals/chat-information/chat-information.component */
    "./src/app/components/modals/chat-information/chat-information.component.ts");
    /* harmony import */


    var _components_chat_main_chat_messages_message_select_message_select_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/chat-main/chat-messages/message-select/message-select.component */
    "./src/app/components/chat-main/chat-messages/message-select/message-select.component.ts");
    /* harmony import */


    var _components_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/modals/message-modal/message-modal.component */
    "./src/app/components/modals/message-modal/message-modal.component.ts");
    /* harmony import */


    var _components_modals_user_contacts_new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/modals/user-contacts/new-contact/new-contact.component */
    "./src/app/components/modals/user-contacts/new-contact/new-contact.component.ts");
    /* harmony import */


    var _components_modals_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/modals/user-contacts/user-contacts.component */
    "./src/app/components/modals/user-contacts/user-contacts.component.ts"); // Modules
    // Services
    // Components


    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationComponent"], _components_chat_main_chat_lists_chat_lists_component__WEBPACK_IMPORTED_MODULE_17__["ChatListsComponent"], _components_chat_main_chat_main_component__WEBPACK_IMPORTED_MODULE_18__["ChatMainComponent"], _components_chat_main_chat_messages_chat_messages_component__WEBPACK_IMPORTED_MODULE_19__["ChatMessagesComponent"], _components_chat_main_chat_lists_chat_preview_chat_preview_component__WEBPACK_IMPORTED_MODULE_20__["ChatPreviewComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"], _components_header_menu_menu_component__WEBPACK_IMPORTED_MODULE_24__["MenuComponent"], _components_modals_header_info_header_info_component__WEBPACK_IMPORTED_MODULE_22__["HeaderInfoComponent"], _components_modals_chat_information_profile_settings_profile_settings_component__WEBPACK_IMPORTED_MODULE_23__["ProfileSettingsComponent"], _components_modals_chat_information_chat_settings_chat_settings_component__WEBPACK_IMPORTED_MODULE_25__["ChatSettingsComponent"], _components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_26__["UserAvatarComponent"], _components_modals_modals_header_modal_header_component__WEBPACK_IMPORTED_MODULE_27__["ModalHeaderComponent"], _components_chat_main_chat_messages_editor_editor_component__WEBPACK_IMPORTED_MODULE_28__["EditorComponent"], _components_modals_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_29__["NewChatComponent"], _components_modals_new_chat_select_users_select_users_component__WEBPACK_IMPORTED_MODULE_30__["SelectUsersComponent"], _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_31__["UsersListComponent"], _components_users_list_user_user_component__WEBPACK_IMPORTED_MODULE_32__["UserComponent"], _components_modals_new_chat_new_chat_footer_new_chat_footer_component__WEBPACK_IMPORTED_MODULE_33__["NewChatFooterComponent"], _components_modals_edit_name_edit_name_component__WEBPACK_IMPORTED_MODULE_34__["EditNameComponent"], _components_chat_main_chat_messages_messages_list_messages_list_component__WEBPACK_IMPORTED_MODULE_35__["MessagesListComponent"], _components_chat_main_chat_messages_messages_list_message_message_component__WEBPACK_IMPORTED_MODULE_36__["MessageComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_37__["SearchComponent"], _components_modals_chat_information_contact_settings_contact_settings_component__WEBPACK_IMPORTED_MODULE_38__["ContactSettingsComponent"], _components_modals_chat_information_chanel_settings_chanel_settings_component__WEBPACK_IMPORTED_MODULE_39__["ChanelSettingsComponent"], _components_modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_40__["ChatInformationComponent"], _components_chat_main_chat_messages_message_select_message_select_component__WEBPACK_IMPORTED_MODULE_41__["MessageSelectComponent"], _components_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_42__["MessageModalComponent"], _components_modals_user_contacts_new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_43__["NewContactComponent"], _components_modals_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_44__["UserContactsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], ngx_material_file_input__WEBPACK_IMPORTED_MODULE_9__["MaterialFileInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__["InfiniteScrollModule"]],
      providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"], _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_13__["BusService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"],
        multi: true
      }],
      entryComponents: [_components_modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_40__["ChatInformationComponent"], _components_modals_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_29__["NewChatComponent"], _components_modals_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_44__["UserContactsComponent"], _components_modals_edit_name_edit_name_component__WEBPACK_IMPORTED_MODULE_34__["EditNameComponent"], _components_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_42__["MessageModalComponent"], _components_modals_user_contacts_new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_43__["NewContactComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-lists/chat-lists.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-lists/chat-lists.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ChatListsComponent */

  /***/
  function srcAppComponentsChatMainChatListsChatListsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatListsComponent", function () {
      return ChatListsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../actions/main.action */
    "./src/app/actions/main.action.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");

    let ChatListsComponent = class ChatListsComponent {
      constructor(api, bus, chatService, socketsService, authService) {
        this.api = api;
        this.bus = bus;
        this.chatService = chatService;
        this.socketsService = socketsService;
        this.authService = authService;
        this.activeUser = null;
        this.chatLists = [];
        this.filterLists = [];
      }

      ngOnInit() {
        this.activeUser = this.authService.userData.id;
        this.api.get({
          url: '/chats'
        }).subscribe(res => {
          this.chatLists = [...res];
          this.filterLists = [...res];
        });
        this.socketsService.onMessage('notify-add-chat').subscribe(res => this.addChatToList(res));
        this.socketsService.onMessage('notify-remove-members').subscribe(res => this.removeMembers(res));
        this.socketsService.onMessage('notify-delete-chat').subscribe(res => this.removeMembers(res, true));
        this.socketsService.onMessage('notify-update-chat').subscribe(res => this.updateChatInfo(res));
        this.socketsService.onMessage('notify-update-avatar').subscribe(res => this.updateAvatar(res));
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["OPEN_CHAT"], this.openChat, this);
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["UPDATE_CHAT_MESSAGE"], this.updateChatMessage, this);
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["ADD_NEW_CHAT"], this.addNewChat, this);
      }

      removeMembers(data, isDelete) {
        if (this.activeUser === data.userId || isDelete) {
          this.chatLists = this.chatLists.filter(chat => chat._id !== data.chatId);
          this.filterLists = this.filterLists.filter(chat => chat._id !== data.chatId); // show 'Select chat...' screen and  close settings modal

          if (this.chatService.activeChat._id === data.chatId) {
            this.chatService.setActiveChat();
            this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["CLOSE_CHAT_SETTINGS_MODAL"]);
          }
        }
      } // TODO: optimization updating function to one


      updateChatInfo(data) {
        if (data.chatId === this.chatService.activeChat._id) {
          this.chatService.activeChat.chatName = data.chatData.chatName;
          this.chatService.activeChat.description = data.chatData.description;
        }

        const chatIndex = this.chatLists.findIndex(chat => chat._id === data.chatId);
        this.chatLists[chatIndex].chatName = data.chatData.chatName;
        this.chatLists[chatIndex].description = data.chatData.description;
        this.filterLists = [...this.chatLists];
      }

      updateAvatar(data) {
        if (data.chatId === this.chatService.activeChat._id) {
          this.chatService.activeChat.avatar = {
            url: data.url
          };
        }

        const chatIndex = this.chatLists.findIndex(chat => chat._id === data.chatId);
        this.chatLists[chatIndex].avatar = {
          url: data.url
        };
        this.filterLists = [...this.chatLists];
      }

      updateChatMessage(message) {
        const chatIndex = this.chatLists.findIndex(chat => chat._id === message.chatId);
        const chat = this.chatLists.splice(chatIndex, 1)[0];
        chat.lastMessage = this.normalizeMessage(message);
        this.chatLists.unshift(chat);
        this.filterLists = [...this.chatLists];
      } // for author of new chat


      addNewChat(chat) {
        this.chatService.setActiveChat(chat);
        this.selectedChatId = chat._id;
        this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["SELECT_CHAT"], {
          chatId: chat._id,
          updateChatInfo: true
        });
      } // for all members in new chat


      addChatToList(chat) {
        this.chatLists.unshift(chat);
        this.filterLists.unshift(chat);
      }

      openChat(data) {
        if (data.isDialog) {
          const dialog = this.chatLists.find(chat => chat.recipientId === data.chatId);

          if (dialog) {
            data.chatId = dialog._id;
          } else {
            this.chatService.createChat('', _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_8__["ChatTypes"].DIALOG, '', [data.chatId]).subscribe(res => this.addNewChat(res.chat));
            return;
          }
        }

        this.selectedChatId = data.chatId;
        this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["SELECT_CHAT"], {
          chatId: data.chatId,
          updateChatInfo: true
        });
      }

      normalizeMessage(message) {
        return {
          _id: message._id,
          chatId: message.chatId,
          message: message.message,
          createdAt: message.createdAt,
          authorId: {
            _id: message.user._id,
            username: message.user.username
          }
        };
      }

      ngOnDestroy() {
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["ADD_NEW_CHAT"], this.addNewChat);
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["UPDATE_CHAT_MESSAGE"], this.updateChatMessage);
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_7__["OPEN_CHAT"], this.openChat);
      }

    };

    ChatListsComponent.ctorParameters = () => [{
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]
    }, {
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
    }, {
      type: _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_6__["SocketsService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }];

    ChatListsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-lists',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-lists.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-lists/chat-lists.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-lists.style.scss */
      "./src/app/components/chat-main/chat-lists/chat-lists.style.scss")).default]
    })], ChatListsComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-lists/chat-lists.style.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/components/chat-main/chat-lists/chat-lists.style.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatMainChatListsChatListsStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-lists {\n  overflow-y: auto;\n  height: calc(100% - 40px);\n}\n.chat-lists li.active-chat {\n  background-color: #aeaebd !important;\n}\n.chat-lists li:hover {\n  background-color: rgba(174, 174, 189, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbGlzdHMvY2hhdC1saXN0cy5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LWxpc3RzL2NoYXQtbGlzdHMuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUNDRjtBRENJO0VBQ0Usb0NBQUE7QUNDTjtBRENJO0VBQ0UsMENBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbGlzdHMvY2hhdC1saXN0cy5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtbGlzdHMge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBsaSB7XG4gICAgJi5hY3RpdmUtY2hhdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NCwgMTc0LCAxODksIDEpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzQsIDE3NCwgMTg5LCAwLjUpO1xuICAgIH1cbiAgfVxufVxuIiwiLmNoYXQtbGlzdHMge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xufVxuLmNoYXQtbGlzdHMgbGkuYWN0aXZlLWNoYXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVhZWJkICFpbXBvcnRhbnQ7XG59XG4uY2hhdC1saXN0cyBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc0LCAxNzQsIDE4OSwgMC41KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ChatPreviewComponent */

  /***/
  function srcAppComponentsChatMainChatListsChatPreviewChatPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPreviewComponent", function () {
      return ChatPreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ChatPreviewComponent = class ChatPreviewComponent {
      constructor() {
        this.chatName = '';
      }

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatPreviewComponent.prototype, "activeUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatPreviewComponent.prototype, "chat", void 0);
    ChatPreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-preview.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-preview.style.scss */
      "./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.style.scss")).default]
    })], ChatPreviewComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.style.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-lists/chat-preview/chat-preview.style.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatMainChatListsChatPreviewChatPreviewStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-preview {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 15px 10px 15px 0;\n  cursor: pointer;\n}\n.chat-preview .chat-data {\n  width: 80%;\n}\n.chat-preview .chat-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 8px;\n  font-size: 12px;\n}\n.chat-preview .chat-info .chat-name {\n  font-weight: bold;\n}\n.chat-preview .chat-message {\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbGlzdHMvY2hhdC1wcmV2aWV3L2NoYXQtcHJldmlldy5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LWxpc3RzL2NoYXQtcHJldmlldy9jaGF0LXByZXZpZXcuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNDRjtBREFFO0VBQ0UsVUFBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7QURESTtFQUNFLGlCQUFBO0FDR047QURBRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LWxpc3RzL2NoYXQtcHJldmlldy9jaGF0LXByZXZpZXcuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LXByZXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC5jaGF0LWRhdGEge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLmNoYXQtaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAuY2hhdC1uYW1lIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICAuY2hhdC1tZXNzYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4iLCIuY2hhdC1wcmV2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAxMHB4IDE1cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNoYXQtcHJldmlldyAuY2hhdC1kYXRhIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5jaGF0LXByZXZpZXcgLmNoYXQtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG4uY2hhdC1wcmV2aWV3IC5jaGF0LWluZm8gLmNoYXQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNoYXQtcHJldmlldyAuY2hhdC1tZXNzYWdlIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXNpemU6IDE0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-main.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/chat-main/chat-main.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChatMainComponent */

  /***/
  function srcAppComponentsChatMainChatMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMainComponent", function () {
      return ChatMainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let ChatMainComponent = class ChatMainComponent {
      constructor(authService) {
        this.authService = authService;
      }

      ngOnInit() {}

    };

    ChatMainComponent.ctorParameters = () => [{
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    ChatMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-main.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-main.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-main.style.scss */
      "./src/app/components/chat-main/chat-main.style.scss")).default]
    })], ChatMainComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-main.style.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/chat-main/chat-main.style.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatMainChatMainStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-container {\n  max-width: 900px;\n  margin: 0 auto;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n.chat-container .chat-main {\n  display: -webkit-box;\n  display: flex;\n  height: 80vh;\n  background-color: white;\n}\n.chat-container .chat-main app-chat-lists {\n  width: 30%;\n  border-right: 1px solid #5580A3;\n}\n.chat-container .chat-main app-chat-messages {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWFpbi5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LW1haW4uc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVDQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0VKO0FEREk7RUFDRSxVQUFBO0VBQ0EsK0JBQUE7QUNHTjtBRERJO0VBQ0UsVUFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jaGF0LW1haW4vY2hhdC1tYWluLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjUpO1xuICAuY2hhdC1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogODB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBhcHAtY2hhdC1saXN0cyB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzU1ODBBMztcbiAgICB9XG4gICAgYXBwLWNoYXQtbWVzc2FnZXMge1xuICAgICAgd2lkdGg6IDcwJTtcbiAgICB9XG4gIH1cbn1cbiIsIi5jaGF0LWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogOTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uY2hhdC1jb250YWluZXIgLmNoYXQtbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogODB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY2hhdC1jb250YWluZXIgLmNoYXQtbWFpbiBhcHAtY2hhdC1saXN0cyB7XG4gIHdpZHRoOiAzMCU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM1NTgwQTM7XG59XG4uY2hhdC1jb250YWluZXIgLmNoYXQtbWFpbiBhcHAtY2hhdC1tZXNzYWdlcyB7XG4gIHdpZHRoOiA3MCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/chat-messages.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/chat-messages.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ChatMessagesComponent */

  /***/
  function srcAppComponentsChatMainChatMessagesChatMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMessagesComponent", function () {
      return ChatMessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts");
    /* harmony import */


    var _scroll_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./scroll.model */
    "./src/app/components/chat-main/chat-messages/scroll.model.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../actions/main.action */
    "./src/app/actions/main.action.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");

    let ChatMessagesComponent = class ChatMessagesComponent {
      constructor(api, bus, chatService, authService, socketsService) {
        this.api = api;
        this.bus = bus;
        this.chatService = chatService;
        this.authService = authService;
        this.socketsService = socketsService;
        this.selectedMessages = [];
        this.messages = [];
        this.showEditor = true;
        this.scrollConfig = new _scroll_model__WEBPACK_IMPORTED_MODULE_7__["ScrollModel"]();
      }

      ngOnInit() {
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["CLEAR_SELECT_MESSAGE"], this.clearSelectMessage, this);
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["SELECT_CHAT"], this.getChatData, this);
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["SCROLL_DOWN"], this.scrollDown, this);
        this.socketsService.onMessage('notify-message').subscribe(message => this.notifyMessages(message));
        this.socketsService.onMessage('notify-delete-message').subscribe(res => this.notifyDeleteMessages(res));
        this.socketsService.onMessage('notify-add-members').subscribe(res => this.addMembers(res));
        this.socketsService.onMessage('notify-remove-members').subscribe(res => this.removeMembers(res));
      }

      scrollDown() {
        if (!this.container) {
          this.container = document.getElementById('msgContainer');
        }

        if (this.container) {
          this.container.scrollTop = this.container.scrollHeight;
        }
      }

      getChatData(data) {
        this.scrollConfig = new _scroll_model__WEBPACK_IMPORTED_MODULE_7__["ScrollModel"]();

        if (data.updateChatInfo) {
          this.api.get({
            url: "/chats/".concat(data.chatId)
          }).subscribe(chat => {
            this.chatService.setActiveChat(chat);
            this.setShowEditorSettings();
          });
          this.api.get({
            url: "/messages/".concat(data.chatId, "?lastMessageDate=").concat(this.scrollConfig.lastMessageDate)
          }).subscribe(res => {
            this.messages = res;
            this.scrollConfig = this.chatService.updateScrollConfig(this.scrollConfig, res);
            setTimeout(() => this.scrollDown(), 0);
            this.selectedMessages = [];
          });
        } else {
          this.messages = [];
          this.selectedMessages = [];
          this.setShowEditorSettings();
        }
      }

      getMessages() {
        this.api.get({
          url: "/messages/".concat(this.chatService.activeChat._id, "?lastMessageDate=").concat(this.scrollConfig.lastMessageDate)
        }).subscribe(res => {
          this.messages = this.messages.concat(res);
          this.scrollConfig = this.chatService.updateScrollConfig(this.scrollConfig, res);
        });
      }

      notifyMessages(message) {
        if (message.chatId === this.chatService.activeChat._id) {
          this.messages.unshift(message);
        }

        this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CHAT_MESSAGE"], message);
      }

      notifyDeleteMessages(data) {
        // TODO: update last message if it was deleted and sort by it
        if (data.chatId === this.chatService.activeChat._id) {
          this.messages = this.messages.filter(el => !data.messages.includes(el._id));
          this.selectedMessages = [];
        }
      }

      setShowEditorSettings() {
        this.showEditor = !(this.chatService.activeChat.chatType === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__["ChatTypes"].CHANNEL && !this.chatService.activeChat.admins.includes(this.authService.userData.id));
      }

      selectMessage(messageId) {
        const selectedMessage = this.messages.find(message => message._id === messageId);
        selectedMessage.selected = !selectedMessage.selected;
        this.selectedMessages = this.messages.filter(message => message.selected);
      }

      clearSelectMessage() {
        this.messages.forEach(el => el.selected = false);
        this.selectedMessages = [];
      }

      addMembers(data) {
        if (this.chatService.activeChat._id === data.chatId) {
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["UPDATE_MEMBERS"], {
            action: 'add',
            users: data.users
          });
          data.users.forEach(() => this.chatService.activeChat.users += 1);
        }
      }

      removeMembers(data) {
        if (this.authService.userData.id !== data.userId && this.chatService.activeChat._id === data.chatId) {
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["UPDATE_MEMBERS"], {
            action: 'delete',
            userId: data.userId
          });
          this.chatService.activeChat.users -= 1;
        }
      }

      ngOnDestroy() {
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["SELECT_CHAT"], this.getChatData);
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["SCROLL_DOWN"], this.scrollDown);
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["CLEAR_SELECT_MESSAGE"], this.clearSelectMessage);
      }

    };

    ChatMessagesComponent.ctorParameters = () => [{
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"]
    }, {
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }, {
      type: _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_6__["SocketsService"]
    }];

    ChatMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-messages.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/chat-messages.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-messages.style.scss */
      "./src/app/components/chat-main/chat-messages/chat-messages.style.scss")).default]
    })], ChatMessagesComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/chat-messages.style.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/chat-messages.style.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatMainChatMessagesChatMessagesStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-messages-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  height: 100%;\n  padding: 10px 25px 10px 0;\n  box-sizing: border-box;\n}\n.chat-messages-container app-messages-list {\n  height: calc(100% - 165px);\n}\n.chat-messages-container .without-editor {\n  height: 100% !important;\n}\n.chat-messages-container app-editor, .chat-messages-container app-message-select {\n  height: 165px;\n}\n.select-chat {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.select-chat p {\n  font-size: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWVzc2FnZXMvY2hhdC1tZXNzYWdlcy5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LW1lc3NhZ2VzL2NoYXQtbWVzc2FnZXMuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQUU7RUFDRSwwQkFBQTtBQ0VKO0FEQUU7RUFDRSx1QkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LW1lc3NhZ2VzL2NoYXQtbWVzc2FnZXMuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0LW1lc3NhZ2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYXBwLW1lc3NhZ2VzLWxpc3Qge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTY1cHgpO1xuICB9XG4gIC53aXRob3V0LWVkaXRvciB7XG4gICAgaGVpZ2h0OiAxMDAlIWltcG9ydGFudDtcbiAgfVxuICBhcHAtZWRpdG9yLCBhcHAtbWVzc2FnZS1zZWxlY3Qge1xuICAgIGhlaWdodDogMTY1cHhcbiAgfVxufVxuXG4uc2VsZWN0LWNoYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwIHtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cbn1cbiIsIi5jaGF0LW1lc3NhZ2VzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweCAyNXB4IDEwcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5jaGF0LW1lc3NhZ2VzLWNvbnRhaW5lciBhcHAtbWVzc2FnZXMtbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTY1cHgpO1xufVxuLmNoYXQtbWVzc2FnZXMtY29udGFpbmVyIC53aXRob3V0LWVkaXRvciB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNoYXQtbWVzc2FnZXMtY29udGFpbmVyIGFwcC1lZGl0b3IsIC5jaGF0LW1lc3NhZ2VzLWNvbnRhaW5lciBhcHAtbWVzc2FnZS1zZWxlY3Qge1xuICBoZWlnaHQ6IDE2NXB4O1xufVxuXG4uc2VsZWN0LWNoYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNlbGVjdC1jaGF0IHAge1xuICBmb250LXNpemU6IDE5cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/editor/editor.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/editor/editor.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: EditorComponent */

  /***/
  function srcAppComponentsChatMainChatMessagesEditorEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
      return EditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../modals/chat-information/chat-information.component */
    "./src/app/components/modals/chat-information/chat-information.component.ts");
    /* harmony import */


    var _models_chat_information_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../models/chat-information.model */
    "./src/app/models/chat-information.model.ts");
    /* harmony import */


    var _models_socket_message_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../models/socket.message.model */
    "./src/app/models/socket.message.model.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../actions/main.action */
    "./src/app/actions/main.action.ts");

    let EditorComponent = class EditorComponent {
      constructor(authService, chatService, dialog, bus, socketsService) {
        this.authService = authService;
        this.chatService = chatService;
        this.dialog = dialog;
        this.bus = bus;
        this.socketsService = socketsService;
        this.usersTyping = [];
        this.typingTimeout = null;
        this.startTyping = false;
      }

      ngOnInit() {
        this.socketsService.onMessage('notify-typing').subscribe(data => this.notifyTyping(data));
        this.socketsService.onMessage('notify-stop-typing').subscribe(data => this.stopTyping(data));
      }

      openModal(type) {
        this.dialog.open(_modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_7__["ChatInformationComponent"], {
          width: '450px',
          data: new _models_chat_information_model__WEBPACK_IMPORTED_MODULE_8__["ChatInformationModel"](type === 'profile' ? _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_10__["ChatTypes"].PROFILE : this.chatService.activeChat.chatType, type === 'profile' || this.chatService.activeChat.admins.includes(this.authService.userData.id) && this.chatService.activeChat.chatType !== _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_10__["ChatTypes"].DIALOG, type === 'profile' ? this.authService.userData.id : this.chatService.activeChat.chatType === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_10__["ChatTypes"].DIALOG ? this.chatService.activeChat.recipientId : this.chatService.activeChat._id)
        });
      }

      typingMessage() {
        clearTimeout(this.typingTimeout);
        const messageData = {
          username: this.authService.userData.username,
          chatId: this.chatService.activeChat._id
        };

        if (!this.startTyping) {
          this.socketsService.send(new _models_socket_message_model__WEBPACK_IMPORTED_MODULE_9__["SocketMessageModel"]('typing', messageData));
          this.startTyping = true;
        }

        this.typingTimeout = setTimeout(() => {
          this.socketsService.send(new _models_socket_message_model__WEBPACK_IMPORTED_MODULE_9__["SocketMessageModel"]('stop-typing', messageData));
          this.startTyping = false;
        }, 3000);
      }

      notifyTyping(data) {
        if (this.chatService.activeChat._id === data.chatId && !this.usersTyping.includes(data.username)) {
          this.usersTyping.push(data.username);
        }
      }

      stopTyping(data) {
        if (this.chatService.activeChat._id === data.chatId) {
          const index = this.usersTyping.indexOf(data.username);

          if (index > -1) {
            this.usersTyping.splice(index, 1);
          }
        }
      }

      sendMessage(event) {
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }

        if (this.message && this.message.trim()) {
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_11__["SCROLL_DOWN"]);
          this.socketsService.send(new _models_socket_message_model__WEBPACK_IMPORTED_MODULE_9__["SocketMessageModel"]('message', {
            authorId: this.authService.userData.id,
            chatId: this.chatService.activeChat._id,
            message: this.message
          }));
          this.message = '';
          this.startTyping = false;
          clearTimeout(this.typingTimeout);
        }
      }

      ngOnDestroy() {
        clearTimeout(this.typingTimeout);
      }

    };

    EditorComponent.ctorParameters = () => [{
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_6__["BusService"]
    }, {
      type: _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_5__["SocketsService"]
    }];

    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editor.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/editor/editor.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editor.style.scss */
      "./src/app/components/chat-main/chat-messages/editor/editor.style.scss")).default]
    })], EditorComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/editor/editor.style.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/editor/editor.style.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatMainChatMessagesEditorEditorStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".editor-container {\n  position: relative;\n  width: 85%;\n  padding: 5px 0;\n  margin: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.editor-container .typing {\n  position: absolute;\n  align-self: center;\n  margin-bottom: 7px;\n}\n.editor-container .send-message {\n  align-self: flex-end;\n}\n.editor-container .img-container {\n  margin-top: 10px;\n}\n.editor-container .img-container app-user-avatar {\n  cursor: pointer;\n}\n.editor-container .editor-input-container {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  margin-top: 25px;\n}\n.editor-container .editor-input-container mat-form-field {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  margin-bottom: 0;\n}\n.editor-container .editor-input-container mat-form-field textarea {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWVzc2FnZXMvZWRpdG9yL2VkaXRvci5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LW1lc3NhZ2VzL2VkaXRvci9lZGl0b3Iuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtBQ0VKO0FEQUU7RUFDRSxnQkFBQTtBQ0VKO0FEREk7RUFDRSxlQUFBO0FDR047QURBRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEREk7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxnQkFBQTtBQ0dOO0FERk07RUFDRSxZQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LW1lc3NhZ2VzL2VkaXRvci9lZGl0b3Iuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0b3ItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODUlO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAudHlwaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuICAuc2VuZC1tZXNzYWdlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxuICAuaW1nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBhcHAtdXNlci1hdmF0YXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAuZWRpdG9yLWlucHV0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5lZGl0b3ItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODUlO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmVkaXRvci1jb250YWluZXIgLnR5cGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4uZWRpdG9yLWNvbnRhaW5lciAuc2VuZC1tZXNzYWdlIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4uZWRpdG9yLWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZWRpdG9yLWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciBhcHAtdXNlci1hdmF0YXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZWRpdG9yLWNvbnRhaW5lciAuZWRpdG9yLWlucHV0LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLmVkaXRvci1jb250YWluZXIgLmVkaXRvci1pbnB1dC1jb250YWluZXIgbWF0LWZvcm0tZmllbGQge1xuICBmbGV4LWdyb3c6IDE7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZWRpdG9yLWNvbnRhaW5lciAuZWRpdG9yLWlucHV0LWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/message-select/message-select.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/message-select/message-select.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: MessageSelectComponent */

  /***/
  function srcAppComponentsChatMainChatMessagesMessageSelectMessageSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageSelectComponent", function () {
      return MessageSelectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../modals/message-modal/message-modal.component */
    "./src/app/components/modals/message-modal/message-modal.component.ts");
    /* harmony import */


    var _modals_message_modal_message_modal_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../modals/message-modal/message-modal.model */
    "./src/app/components/modals/message-modal/message-modal.model.ts");
    /* harmony import */


    var _models_socket_message_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../models/socket.message.model */
    "./src/app/models/socket.message.model.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../actions/main.action */
    "./src/app/actions/main.action.ts");

    let MessageSelectComponent = class MessageSelectComponent {
      constructor(dialog, bus, chatService, socketsService) {
        this.dialog = dialog;
        this.bus = bus;
        this.chatService = chatService;
        this.socketsService = socketsService;
      }

      ngOnInit() {}

      deleteMessages() {
        const dialogRef = this.dialog.open(_modals_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_6__["MessageModalComponent"], {
          width: '450px',
          data: new _modals_message_modal_message_modal_model__WEBPACK_IMPORTED_MODULE_7__["MessageModalModel"]('Delete messages?', true, true)
        });
        dialogRef.afterClosed().subscribe(res => {
          if (res) {
            this.socketsService.send(new _models_socket_message_model__WEBPACK_IMPORTED_MODULE_8__["SocketMessageModel"]('delete-messages', {
              messages: this.messages.map(el => el._id),
              chatId: this.chatService.activeChat._id
            }));
          }
        });
      }

      clearSelection() {
        this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_9__["CLEAR_SELECT_MESSAGE"]);
      }

    };

    MessageSelectComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_4__["BusService"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
    }, {
      type: _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageSelectComponent.prototype, "messages", void 0);
    MessageSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-select',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-select.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/message-select/message-select.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-select.style.scss */
      "./src/app/components/chat-main/chat-messages/message-select/message-select.style.scss")).default]
    })], MessageSelectComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/message-select/message-select.style.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/message-select/message-select.style.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatMainChatMessagesMessageSelectMessageSelectStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message-select-container {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n.message-select-container .delete-button, .message-select-container .cancel-button {\n  background-color: #5580a3;\n  color: #ffffff;\n  width: 100px;\n  margin: auto;\n  text-align: center;\n}\n.message-select-container .cancel-button {\n  background-color: transparent;\n  color: #5580a3;\n  border: 1px solid #5580a3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWVzc2FnZXMvbWVzc2FnZS1zZWxlY3QvbWVzc2FnZS1zZWxlY3Quc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LW1haW4vY2hhdC1tZXNzYWdlcy9tZXNzYWdlLXNlbGVjdC9tZXNzYWdlLXNlbGVjdC5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRUo7QURBRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXQtbWFpbi9jaGF0LW1lc3NhZ2VzL21lc3NhZ2Utc2VsZWN0L21lc3NhZ2Utc2VsZWN0LnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1zZWxlY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuZGVsZXRlLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTgwYTM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNhbmNlbC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNTU4MGEzO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTgwYTM7XG4gIH1cbn1cbiIsIi5tZXNzYWdlLXNlbGVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVzc2FnZS1zZWxlY3QtY29udGFpbmVyIC5kZWxldGUtYnV0dG9uLCAubWVzc2FnZS1zZWxlY3QtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ODBhMztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWVzc2FnZS1zZWxlY3QtY29udGFpbmVyIC5jYW5jZWwtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNTU4MGEzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU4MGEzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/messages-list/message/message.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/messages-list/message/message.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: MessageComponent */

  /***/
  function srcAppComponentsChatMainChatMessagesMessagesListMessageMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
      return MessageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../modals/chat-information/chat-information.component */
    "./src/app/components/modals/chat-information/chat-information.component.ts");
    /* harmony import */


    var _models_chat_information_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../models/chat-information.model */
    "./src/app/models/chat-information.model.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");
    /* harmony import */


    var _services_interfaces_message_types_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../services/interfaces/message-types.interfaces */
    "./src/app/services/interfaces/message-types.interfaces.ts");

    let MessageComponent = class MessageComponent {
      constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
        this.REPORT = _services_interfaces_message_types_interfaces__WEBPACK_IMPORTED_MODULE_7__["MessageTypes"].REPORT;
      }

      ngOnInit() {}

      openProfile(event) {
        event.preventDefault();
        event.stopPropagation();
        const data = this.authService.userData.id === this.message.user._id ? new _models_chat_information_model__WEBPACK_IMPORTED_MODULE_5__["ChatInformationModel"](_services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_6__["ChatTypes"].PROFILE, true, this.authService.userData.id) : new _models_chat_information_model__WEBPACK_IMPORTED_MODULE_5__["ChatInformationModel"](_services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_6__["ChatTypes"].DIALOG, false, this.message.user._id);
        this.dialog.open(_modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_4__["ChatInformationComponent"], {
          width: '450px',
          data
        });
      }

    };

    MessageComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageComponent.prototype, "message", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/messages-list/message/message.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message.style.scss */
      "./src/app/components/chat-main/chat-messages/messages-list/message/message.style.scss")).default]
    })], MessageComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/messages-list/message/message.style.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/messages-list/message/message.style.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatMainChatMessagesMessagesListMessageMessageStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".single-message-container {\n  display: -webkit-box;\n  display: flex;\n  padding: 15px 5px;\n}\n.single-message-container.active {\n  background-color: rgba(174, 174, 189, 0.5);\n}\n.single-message-container .message-selector-container {\n  width: 30px;\n  margin: auto;\n}\n.single-message-container .message-selector-container .hover {\n  display: none;\n}\n.single-message-container .message-details-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.single-message-container .message-details-container .author-container {\n  display: -webkit-box;\n  display: flex;\n}\n.single-message-container .message-details-container .author-container .author {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  font-size: 16px;\n  margin: auto;\n}\n.single-message-container .message-details-container .author-container .date {\n  display: -webkit-box;\n  display: flex;\n  font-size: 12px;\n  margin: auto;\n}\n.single-message-container .message-details-container .message-container {\n  display: -webkit-box;\n  display: flex;\n}\n.single-message-container .message-details-container .message-container .report-message {\n  margin: auto;\n}\n.hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWVzc2FnZXMvbWVzc2FnZXMtbGlzdC9tZXNzYWdlL21lc3NhZ2Uuc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jaGF0LW1haW4vY2hhdC1tZXNzYWdlcy9tZXNzYWdlcy1saXN0L21lc3NhZ2UvbWVzc2FnZS5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREFFO0VBQ0UsMENBQUE7QUNFSjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtBQ0dOO0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNFSjtBRERJO0VBWUUsb0JBQUE7RUFBQSxhQUFBO0FDUk47QURITTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDS1I7QURITTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDS1I7QURESTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0dOO0FERk07RUFDRSxZQUFBO0FDSVI7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWVzc2FnZXMvbWVzc2FnZXMtbGlzdC9tZXNzYWdlL21lc3NhZ2Uuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtbWVzc2FnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc0LCAxNzQsIDE4OSwgMC41KTtcbiAgfVxuICAubWVzc2FnZS1zZWxlY3Rvci1jb250YWluZXIge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuaG92ZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgLm1lc3NhZ2UtZGV0YWlscy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmF1dGhvci1jb250YWluZXIge1xuICAgICAgLmF1dGhvciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgICAuZGF0ZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgfVxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG4gICAgLm1lc3NhZ2UtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAucmVwb3J0LW1lc3NhZ2Uge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5ob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbiIsIi5zaW5nbGUtbWVzc2FnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4IDVweDtcbn1cbi5zaW5nbGUtbWVzc2FnZS1jb250YWluZXIuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzQsIDE3NCwgMTg5LCAwLjUpO1xufVxuLnNpbmdsZS1tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1zZWxlY3Rvci1jb250YWluZXIge1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNpbmdsZS1tZXNzYWdlLWNvbnRhaW5lciAubWVzc2FnZS1zZWxlY3Rvci1jb250YWluZXIgLmhvdmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zaW5nbGUtbWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtZGV0YWlscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2luZ2xlLW1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWRldGFpbHMtY29udGFpbmVyIC5hdXRob3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zaW5nbGUtbWVzc2FnZS1jb250YWluZXIgLm1lc3NhZ2UtZGV0YWlscy1jb250YWluZXIgLmF1dGhvci1jb250YWluZXIgLmF1dGhvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uc2luZ2xlLW1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWRldGFpbHMtY29udGFpbmVyIC5hdXRob3ItY29udGFpbmVyIC5kYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uc2luZ2xlLW1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWRldGFpbHMtY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uc2luZ2xlLW1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlLWRldGFpbHMtY29udGFpbmVyIC5tZXNzYWdlLWNvbnRhaW5lciAucmVwb3J0LW1lc3NhZ2Uge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/messages-list/messages-list.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/messages-list/messages-list.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MessagesListComponent */

  /***/
  function srcAppComponentsChatMainChatMessagesMessagesListMessagesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesListComponent", function () {
      return MessagesListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_interfaces_message_types_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/interfaces/message-types.interfaces */
    "./src/app/services/interfaces/message-types.interfaces.ts");

    let MessagesListComponent = class MessagesListComponent {
      constructor() {
        this.selectMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scrollMessages = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.REPORT = _services_interfaces_message_types_interfaces__WEBPACK_IMPORTED_MODULE_2__["MessageTypes"].REPORT;
      }

      ngOnInit() {}

      onScrollUp() {
        this.scrollMessages.emit();
      }

      select(messageId) {
        this.selectMessage.emit(messageId);
      }

      ngOnDestroy() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MessagesListComponent.prototype, "selectMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MessagesListComponent.prototype, "scrollMessages", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessagesListComponent.prototype, "messages", void 0);
    MessagesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages-list.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/chat-main/chat-messages/messages-list/messages-list.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages-list.style.scss */
      "./src/app/components/chat-main/chat-messages/messages-list/messages-list.style.scss")).default]
    })], MessagesListComponent);
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/messages-list/messages-list.style.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/messages-list/messages-list.style.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsChatMainChatMessagesMessagesListMessagesListStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message-list-container {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n          flex-direction: column-reverse;\n  overflow-y: auto;\n}\n.message-list-container .scroll-viewport {\n  height: 100%;\n}\n.message-list-container .report {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWVzc2FnZXMvbWVzc2FnZXMtbGlzdC9tZXNzYWdlcy1saXN0LnN0eWxlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWVzc2FnZXMvbWVzc2FnZXMtbGlzdC9tZXNzYWdlcy1saXN0LnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsOEJBQUE7VUFBQSw4QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7QUNFSjtBREFFO0VBQ0Usb0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhdC1tYWluL2NoYXQtbWVzc2FnZXMvbWVzc2FnZXMtbGlzdC9tZXNzYWdlcy1saXN0LnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1saXN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLnNjcm9sbC12aWV3cG9ydCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5yZXBvcnQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG59XG4iLCIubWVzc2FnZS1saXN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5tZXNzYWdlLWxpc3QtY29udGFpbmVyIC5zY3JvbGwtdmlld3BvcnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVzc2FnZS1saXN0LWNvbnRhaW5lciAucmVwb3J0IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/chat-main/chat-messages/scroll.model.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/chat-main/chat-messages/scroll.model.ts ***!
    \********************************************************************/

  /*! exports provided: ScrollModel */

  /***/
  function srcAppComponentsChatMainChatMessagesScrollModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollModel", function () {
      return ScrollModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class ScrollModel {
      constructor(dateOfLast) {
        this.lastMessageDate = new Date().toISOString();
        this.lastMessageDate = dateOfLast || new Date().toISOString();
      }

    }
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../modals/chat-information/chat-information.component */
    "./src/app/components/modals/chat-information/chat-information.component.ts");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _models_chat_information_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/chat-information.model */
    "./src/app/models/chat-information.model.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");

    let HeaderComponent = class HeaderComponent {
      constructor(dialog, chatService, authService) {
        this.dialog = dialog;
        this.chatService = chatService;
        this.authService = authService;
      }

      ngOnInit() {}

      openChatSetting() {
        if (this.chatService.activeChat._id) {
          this.dialog.open(_modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_3__["ChatInformationComponent"], {
            width: '450px',
            data: new _models_chat_information_model__WEBPACK_IMPORTED_MODULE_6__["ChatInformationModel"](this.chatService.activeChat.chatType, this.chatService.activeChat.chatType === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_7__["ChatTypes"].PROFILE || this.chatService.activeChat.admins.includes(this.authService.userData.id) && this.chatService.activeChat.chatType !== _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_7__["ChatTypes"].DIALOG, this.chatService.activeChat.chatType === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_7__["ChatTypes"].DIALOG ? this.chatService.activeChat.recipientId : this.chatService.activeChat._id)
          });
        }
      }

      ngOnDestroy() {}

    };

    HeaderComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }];

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.style.scss */
      "./src/app/components/header/header.style.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.style.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/header/header.style.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  color: #ffffff;\n  background-color: #5580a3;\n  display: -webkit-box;\n  display: flex;\n  margin: auto;\n  max-width: 1010px;\n  padding: 0 !important;\n}\n.header .header-menu {\n  width: 30%;\n  height: 100%;\n  margin: auto 0;\n}\n.header .chat-name {\n  -webkit-box-flex: 3;\n          flex-grow: 3;\n  margin: auto;\n  cursor: pointer;\n  height: 100%;\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n}\n.header .chat-name .members-count {\n  display: inline-block;\n  font-size: 16px;\n  margin: 2px 0 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURBRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUU7RUFDRSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx3REFBQTtBQ0VKO0FEREk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTgwYTM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDEwcHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgLmhlYWRlci1tZW51IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG8gMDtcbiAgfVxuICAuY2hhdC1uYW1lIHtcbiAgICBmbGV4LWdyb3c6IDM7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgLm1lbWJlcnMtY291bnQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbWFyZ2luOiAycHggMCAwIDEwcHg7XG4gICAgfVxuICB9XG59XG4iLCIuaGVhZGVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTgwYTM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDEwcHg7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5oZWFkZXIgLmhlYWRlci1tZW51IHtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi5oZWFkZXIgLmNoYXQtbmFtZSB7XG4gIGZsZXgtZ3JvdzogMztcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cbi5oZWFkZXIgLmNoYXQtbmFtZSAubWVtYmVycy1jb3VudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDJweCAwIDAgMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/header/menu/menu.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/header/menu/menu.component.ts ***!
    \**********************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsHeaderMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _modals_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../modals/new-chat/new-chat.component */
    "./src/app/components/modals/new-chat/new-chat.component.ts");
    /* harmony import */


    var _modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../modals/chat-information/chat-information.component */
    "./src/app/components/modals/chat-information/chat-information.component.ts");
    /* harmony import */


    var _modals_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../modals/user-contacts/user-contacts.component */
    "./src/app/components/modals/user-contacts/user-contacts.component.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");
    /* harmony import */


    var _models_chat_information_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../models/chat-information.model */
    "./src/app/models/chat-information.model.ts");

    let MenuComponent = class MenuComponent {
      constructor(dialog, authService) {
        this.dialog = dialog;
        this.authService = authService;
      }

      ngOnInit() {}

      openModal(type) {
        if (type === 'Settings') {
          this.dialog.open(_modals_chat_information_chat_information_component__WEBPACK_IMPORTED_MODULE_5__["ChatInformationComponent"], {
            width: '450px',
            data: new _models_chat_information_model__WEBPACK_IMPORTED_MODULE_8__["ChatInformationModel"](_services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_7__["ChatTypes"].PROFILE, true, this.authService.userData.id)
          });
        } else if (type === 'Contacts') {
          this.dialog.open(_modals_user_contacts_user_contacts_component__WEBPACK_IMPORTED_MODULE_6__["UserContactsComponent"], {
            width: '450px'
          });
        } else {
          this.dialog.open(_modals_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_4__["NewChatComponent"], {
            width: '450px',
            data: {
              type,
              contacts: []
            }
          });
        }
      }

    };

    MenuComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/menu/menu.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.style.scss */
      "./src/app/components/header/menu/menu.style.scss")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/components/header/menu/menu.style.scss":
  /*!********************************************************!*\
    !*** ./src/app/components/header/menu/menu.style.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderMenuMenuStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header-menu-container {\n  width: 100%;\n  height: 100%;\n}\n.header-menu-container .header-menu-button {\n  width: 100%;\n  text-align: inherit;\n  display: block;\n  height: 100%;\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL21lbnUvbWVudS5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9tZW51L21lbnUuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esd0RBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL21lbnUvbWVudS5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1tZW51LWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5oZWFkZXItbWVudS1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xuICB9XG59XG4iLCIuaGVhZGVyLW1lbnUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5oZWFkZXItbWVudS1jb250YWluZXIgLmhlYWRlci1tZW51LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_enrcypt_decrypt_encrypt_decrypt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/enrcypt-decrypt/encrypt-decrypt.service */
    "./src/app/services/enrcypt-decrypt/encrypt-decrypt.service.ts");
    /* harmony import */


    var _login_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.model */
    "./src/app/components/login/login.model.ts");
    /* harmony import */


    var _login_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login.form */
    "./src/app/components/login/login.form.ts");

    let LoginComponent = class LoginComponent {
      constructor(router, api, authService, encryptDecryptService) {
        this.router = router;
        this.api = api;
        this.authService = authService;
        this.encryptDecryptService = encryptDecryptService;
        this.loginError = '';
        this.loginRequest$ = null;
        this.model = new _login_model__WEBPACK_IMPORTED_MODULE_6__["LoginModel"]();
        this.form = new _login_form__WEBPACK_IMPORTED_MODULE_7__["default"](this.model);
      }

      ngOnInit() {}

      login() {
        this.loginRequest$ = this.api.post({
          url: '/users/login',
          body: {
            username: this.model.username,
            password: this.encryptDecryptService.encrypt(this.model.password)
          }
        }).subscribe(res => this.authService.setUserData(res), err => this.loginError = err.error.message);
      }

      ngOnDestroy() {
        if (this.loginRequest$) {
          this.loginRequest$.unsubscribe();
        }
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _services_enrcypt_decrypt_encrypt_decrypt_service__WEBPACK_IMPORTED_MODULE_5__["EncryptDecryptService"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.style.scss */
      "./src/app/components/login/login.style.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.form.ts":
  /*!************************************************!*\
    !*** ./src/app/components/login/login.form.ts ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginFormTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return LoginForm;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    class LoginForm {
      constructor(model) {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]();
        this.model = model;
        this.createForm();
      }

      createForm() {
        this.formGroup = this.formBuilder.group({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.username, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.password, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          })
        });
        this.formGroup.valueChanges.subscribe(data => {
          this.model.username = data.username;
          this.model.password = data.password;
        });
      }

      getControl(name) {
        return this.formGroup.get(name);
      }

    }
    /***/

  },

  /***/
  "./src/app/components/login/login.model.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/login/login.model.ts ***!
    \*************************************************/

  /*! exports provided: LoginModel */

  /***/
  function srcAppComponentsLoginLoginModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModel", function () {
      return LoginModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class LoginModel {}
    /***/

  },

  /***/
  "./src/app/components/login/login.style.scss":
  /*!***************************************************!*\
    !*** ./src/app/components/login/login.style.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  display: block;\n  margin: 15px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG4iLCJidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/chanel-settings/chanel-settings.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/chanel-settings/chanel-settings.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: ChanelSettingsComponent */

  /***/
  function srcAppComponentsModalsChatInformationChanelSettingsChanelSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChanelSettingsComponent", function () {
      return ChanelSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../message-modal/message-modal.component */
    "./src/app/components/modals/message-modal/message-modal.component.ts");
    /* harmony import */


    var _message_modal_message_modal_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../message-modal/message-modal.model */
    "./src/app/components/modals/message-modal/message-modal.model.ts");
    /* harmony import */


    var _models_socket_message_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../models/socket.message.model */
    "./src/app/models/socket.message.model.ts");

    let ChanelSettingsComponent = class ChanelSettingsComponent {
      constructor(dialog, authService, chatService, api, socketsService) {
        this.dialog = dialog;
        this.authService = authService;
        this.chatService = chatService;
        this.api = api;
        this.socketsService = socketsService;
      }

      ngOnInit() {}

      leaveChannel() {
        this.socketsService.send(new _models_socket_message_model__WEBPACK_IMPORTED_MODULE_9__["SocketMessageModel"]('remove-members', {
          chatId: this.chatService.activeChat._id,
          userId: this.authService.userData.id
        }));
      }

      deleteChannel() {
        const dialogRef = this.dialog.open(_message_modal_message_modal_component__WEBPACK_IMPORTED_MODULE_7__["MessageModalComponent"], {
          width: '450px',
          data: new _message_modal_message_modal_model__WEBPACK_IMPORTED_MODULE_8__["MessageModalModel"]('Delete channel?', true, true)
        });
        dialogRef.afterClosed().subscribe(res => {
          if (res) {
            this.api.delete({
              url: "/chats/".concat(this.chatService.activeChat._id)
            }).subscribe(() => console.log('Success'));
          }
        });
      }

    };

    ChanelSettingsComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]
    }, {
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"]
    }, {
      type: _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_4__["SocketsService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChanelSettingsComponent.prototype, "editChat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChanelSettingsComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChanelSettingsComponent.prototype, "chatUsers", void 0);
    ChanelSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chanel-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chanel-settings.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chanel-settings/chanel-settings.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chanel-settings.style.scss */
      "./src/app/components/modals/chat-information/chanel-settings/chanel-settings.style.scss")).default]
    })], ChanelSettingsComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/chanel-settings/chanel-settings.style.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/chanel-settings/chanel-settings.style.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsChatInformationChanelSettingsChanelSettingsStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".channel-settings {\n  padding: 15px;\n}\n.channel-settings .channel-description, .channel-settings .channel-actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.channel-settings .channel-description mat-icon, .channel-settings .channel-actions mat-icon {\n  font-size: 30px;\n  margin-right: 20px;\n}\n.channel-settings .channel-actions {\n  padding-left: 15px;\n}\n.channel-settings .channel-description {\n  margin: 15px 0;\n  padding-left: 15px;\n}\n.channel-settings .channel-description p {\n  margin-top: 5px;\n}\n.channel-settings .link {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NoYXQtaW5mb3JtYXRpb24vY2hhbmVsLXNldHRpbmdzL2NoYW5lbC1zZXR0aW5ncy5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jaGF0LWluZm9ybWF0aW9uL2NoYW5lbC1zZXR0aW5ncy9jaGFuZWwtc2V0dGluZ3Muc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjtBREFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNHTjtBREFFO0VBQ0Usa0JBQUE7QUNFSjtBREFFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7QUNHTjtBREFFO0VBQ0UsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvY2hhdC1pbmZvcm1hdGlvbi9jaGFuZWwtc2V0dGluZ3MvY2hhbmVsLXNldHRpbmdzLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhbm5lbC1zZXR0aW5ncyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC5jaGFubmVsLWRlc2NyaXB0aW9uLCAuY2hhbm5lbC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxuICAuY2hhbm5lbC1hY3Rpb25zIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLmNoYW5uZWwtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwIHtcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB9XG4gIH1cbiAgLmxpbmsge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxufVxuIiwiLmNoYW5uZWwtc2V0dGluZ3Mge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLmNoYW5uZWwtc2V0dGluZ3MgLmNoYW5uZWwtZGVzY3JpcHRpb24sIC5jaGFubmVsLXNldHRpbmdzIC5jaGFubmVsLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNoYW5uZWwtc2V0dGluZ3MgLmNoYW5uZWwtZGVzY3JpcHRpb24gbWF0LWljb24sIC5jaGFubmVsLXNldHRpbmdzIC5jaGFubmVsLWFjdGlvbnMgbWF0LWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5jaGFubmVsLXNldHRpbmdzIC5jaGFubmVsLWFjdGlvbnMge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uY2hhbm5lbC1zZXR0aW5ncyAuY2hhbm5lbC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMTVweCAwO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG4uY2hhbm5lbC1zZXR0aW5ncyAuY2hhbm5lbC1kZXNjcmlwdGlvbiBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmNoYW5uZWwtc2V0dGluZ3MgLmxpbmsge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/chat-information.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/chat-information.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: ChatInformationComponent */

  /***/
  function srcAppComponentsModalsChatInformationChatInformationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatInformationComponent", function () {
      return ChatInformationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _models_chat_information_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../models/chat-information.model */
    "./src/app/models/chat-information.model.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../actions/main.action */
    "./src/app/actions/main.action.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");

    let ChatInformationComponent = class ChatInformationComponent {
      constructor(api, chatService, authService, bus, dialogRef, data) {
        this.api = api;
        this.chatService = chatService;
        this.authService = authService;
        this.bus = bus;
        this.dialogRef = dialogRef;
        this.data = data;
        this.chatTypes = _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__["ChatTypes"];
        this.chatName = '';
        this.channelDescription = '';
        this.chatUsers = [];
        this.image = '';
      }

      ngOnInit() {
        this.getChatInformation();
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CHAT_INFO"], this.changeChatInfo, this);
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["CLOSE_CHAT_SETTINGS_MODAL"], this.closeModel, this);
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["UPDATE_MEMBERS"], this.updateMembers, this);
      }

      getChatInformation() {
        const url = this.data.type === this.chatTypes.PROFILE || this.data.type === this.chatTypes.DIALOG ? "/users/".concat(this.data.chatId) : "/chats/".concat(this.data.chatId);
        this.api.get({
          url
        }).subscribe(res => {
          this.image = res.avatar && res.avatar.url ? res.avatar.url : '';
          this.chatName = res.username || res.chatName;
          this.channelDescription = res.description || '';
          this.chatUsers = res.users || [];
        }, err => console.log('error', err));
      }

      updateMembers(data) {
        this.chatUsers = data.action === 'add' ? this.chatUsers.concat(data.users) : this.chatUsers.filter(user => user._id !== data.userId);
      }

      changeChatInfo(data) {
        this.chatName = data.name;
        this.channelDescription = data.description;
      }

      closeModel() {
        this.dialogRef.close();
      }

      ngOnDestroy() {
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["UPDATE_MEMBERS"], this.updateMembers);
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["CLOSE_CHAT_SETTINGS_MODAL"], this.closeModel);
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["UPDATE_CHAT_INFO"], this.changeChatInfo);
      }

    };

    ChatInformationComponent.ctorParameters = () => [{
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
    }, {
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: _models_chat_information_model__WEBPACK_IMPORTED_MODULE_7__["ChatInformationModel"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    ChatInformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-information',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-information.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chat-information.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-information.style.scss */
      "./src/app/components/modals/chat-information/chat-information.style.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], ChatInformationComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/chat-information.style.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/chat-information.style.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsChatInformationChatInformationStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NoYXQtaW5mb3JtYXRpb24vY2hhdC1pbmZvcm1hdGlvbi5zdHlsZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/chat-settings/chat-settings.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/chat-settings/chat-settings.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ChatSettingsComponent */

  /***/
  function srcAppComponentsModalsChatInformationChatSettingsChatSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatSettingsComponent", function () {
      return ChatSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _chat_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../chat-information.component */
    "./src/app/components/modals/chat-information/chat-information.component.ts");
    /* harmony import */


    var _new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../new-chat/new-chat.component */
    "./src/app/components/modals/new-chat/new-chat.component.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");
    /* harmony import */


    var _models_chat_information_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../models/chat-information.model */
    "./src/app/models/chat-information.model.ts");
    /* harmony import */


    var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../services/sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts");
    /* harmony import */


    var _models_socket_message_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../models/socket.message.model */
    "./src/app/models/socket.message.model.ts");

    let ChatSettingsComponent = class ChatSettingsComponent {
      constructor(api, authService, chatService, socketsService, dialog) {
        this.api = api;
        this.authService = authService;
        this.chatService = chatService;
        this.socketsService = socketsService;
        this.dialog = dialog;
      }

      ngOnInit() {
        this.userId = this.authService.userData.id;
      }

      openProfile(id) {
        const ifProfile = this.userId === id;
        this.dialog.open(_chat_information_component__WEBPACK_IMPORTED_MODULE_6__["ChatInformationComponent"], {
          width: '450px',
          data: new _models_chat_information_model__WEBPACK_IMPORTED_MODULE_9__["ChatInformationModel"](ifProfile ? _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_8__["ChatTypes"].PROFILE : _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_8__["ChatTypes"].DIALOG, ifProfile, id)
        });
      }

      openContacts() {
        this.dialog.open(_new_chat_new_chat_component__WEBPACK_IMPORTED_MODULE_7__["NewChatComponent"], {
          width: '450px',
          data: {
            type: 'Contacts',
            contacts: this.chatUsers
          }
        });
      }

      removeUser(userId) {
        this.socketsService.send(new _models_socket_message_model__WEBPACK_IMPORTED_MODULE_11__["SocketMessageModel"]('remove-members', {
          chatId: this.chatService.activeChat._id,
          userId
        }));
      }

    };

    ChatSettingsComponent.ctorParameters = () => [{
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_5__["ChatService"]
    }, {
      type: _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_10__["SocketsService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatSettingsComponent.prototype, "editChat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatSettingsComponent.prototype, "chatUsers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatSettingsComponent.prototype, "isChannel", void 0);
    ChatSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-settings.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/chat-settings/chat-settings.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-settings.style.scss */
      "./src/app/components/modals/chat-information/chat-settings/chat-settings.style.scss")).default]
    })], ChatSettingsComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/chat-settings/chat-settings.style.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/chat-settings/chat-settings.style.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsChatInformationChatSettingsChatSettingsStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-settings {\n  padding: 15px;\n}\n.chat-settings mat-icon {\n  font-size: 30px;\n  margin-right: 20px;\n}\n.chat-settings .add-member {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 25px;\n}\n.chat-settings .add-member span {\n  margin-top: 5px;\n}\n.chat-settings .users-chat {\n  display: -webkit-box;\n  display: flex;\n}\n.chat-settings .users-chat .users-chat-list {\n  width: 100%;\n}\n.chat-settings .users-chat .users-chat-list li {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 5px;\n}\n.chat-settings .users-chat .users-chat-list li .user-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NoYXQtaW5mb3JtYXRpb24vY2hhdC1zZXR0aW5ncy9jaGF0LXNldHRpbmdzLnN0eWxlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NoYXQtaW5mb3JtYXRpb24vY2hhdC1zZXR0aW5ncy9jaGF0LXNldHRpbmdzLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsZUFBQTtBQ0dOO0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtBQ0dOO0FERk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNJUjtBREhRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDS1YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jaGF0LWluZm9ybWF0aW9uL2NoYXQtc2V0dGluZ3MvY2hhdC1zZXR0aW5ncy5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtc2V0dGluZ3Mge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICAuYWRkLW1lbWJlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgfVxuICB9XG4gIC51c2Vycy1jaGF0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC51c2Vycy1jaGF0LWxpc3Qge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgLnVzZXItaW5mbyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIuY2hhdC1zZXR0aW5ncyB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uY2hhdC1zZXR0aW5ncyBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmNoYXQtc2V0dGluZ3MgLmFkZC1tZW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmNoYXQtc2V0dGluZ3MgLmFkZC1tZW1iZXIgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jaGF0LXNldHRpbmdzIC51c2Vycy1jaGF0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jaGF0LXNldHRpbmdzIC51c2Vycy1jaGF0IC51c2Vycy1jaGF0LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jaGF0LXNldHRpbmdzIC51c2Vycy1jaGF0IC51c2Vycy1jaGF0LWxpc3QgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2hhdC1zZXR0aW5ncyAudXNlcnMtY2hhdCAudXNlcnMtY2hhdC1saXN0IGxpIC51c2VyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/contact-settings/contact-settings.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/contact-settings/contact-settings.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ContactSettingsComponent */

  /***/
  function srcAppComponentsModalsChatInformationContactSettingsContactSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactSettingsComponent", function () {
      return ContactSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../actions/main.action */
    "./src/app/actions/main.action.ts");

    let ContactSettingsComponent = class ContactSettingsComponent {
      constructor(api, bus) {
        this.api = api;
        this.bus = bus;
        this.isContact = false;
      }

      ngOnInit() {
        this.api.get({
          url: "/contacts/".concat(this.contactId)
        }).subscribe(res => {
          this.isContact = res.data;
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_4__["SHOW_CHAT_ICON"], res.data);
        });
      }

      addContact() {
        this.api.post({
          url: "/contacts/".concat(this.username),
          body: {}
        }).subscribe(() => {
          this.isContact = true;
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_4__["SHOW_CHAT_ICON"], true);
        });
      }

      deleteContact() {
        this.api.delete({
          url: "/contacts/".concat(this.contactId)
        }).subscribe(() => {
          this.isContact = false;
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_4__["SHOW_CHAT_ICON"], false);
        });
      }

    };

    ContactSettingsComponent.ctorParameters = () => [{
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]
    }, {
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactSettingsComponent.prototype, "contactId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ContactSettingsComponent.prototype, "username", void 0);
    ContactSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact-settings.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/contact-settings/contact-settings.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact-settings.style.scss */
      "./src/app/components/modals/chat-information/contact-settings/contact-settings.style.scss")).default]
    })], ContactSettingsComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/contact-settings/contact-settings.style.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/contact-settings/contact-settings.style.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsChatInformationContactSettingsContactSettingsStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".contact-info {\n  padding: 15px;\n  display: -webkit-box;\n  display: flex;\n}\n.contact-info mat-icon {\n  font-size: 30px;\n  margin-right: 20px;\n}\n.contact-info span {\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NoYXQtaW5mb3JtYXRpb24vY29udGFjdC1zZXR0aW5ncy9jb250YWN0LXNldHRpbmdzLnN0eWxlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NoYXQtaW5mb3JtYXRpb24vY29udGFjdC1zZXR0aW5ncy9jb250YWN0LXNldHRpbmdzLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUU7RUFDRSxlQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jaGF0LWluZm9ybWF0aW9uL2NvbnRhY3Qtc2V0dGluZ3MvY29udGFjdC1zZXR0aW5ncy5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtaW5mbyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIHNwYW4ge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxufVxuIiwiLmNvbnRhY3QtaW5mbyB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY29udGFjdC1pbmZvIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY29udGFjdC1pbmZvIHNwYW4ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/profile-settings/profile-settings.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/profile-settings/profile-settings.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ProfileSettingsComponent */

  /***/
  function srcAppComponentsModalsChatInformationProfileSettingsProfileSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSettingsComponent", function () {
      return ProfileSettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let ProfileSettingsComponent = class ProfileSettingsComponent {
      constructor(authService) {
        this.authService = authService;
      }

      ngOnInit() {}

      logout() {
        this.authService.logout();
      }

    };

    ProfileSettingsComponent.ctorParameters = () => [{
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    ProfileSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-settings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-settings.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/chat-information/profile-settings/profile-settings.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-settings.style.scss */
      "./src/app/components/modals/chat-information/profile-settings/profile-settings.style.scss")).default]
    })], ProfileSettingsComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/chat-information/profile-settings/profile-settings.style.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/modals/chat-information/profile-settings/profile-settings.style.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsChatInformationProfileSettingsProfileSettingsStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-info-container {\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NoYXQtaW5mb3JtYXRpb24vcHJvZmlsZS1zZXR0aW5ncy9wcm9maWxlLXNldHRpbmdzLnN0eWxlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2NoYXQtaW5mb3JtYXRpb24vcHJvZmlsZS1zZXR0aW5ncy9wcm9maWxlLXNldHRpbmdzLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9jaGF0LWluZm9ybWF0aW9uL3Byb2ZpbGUtc2V0dGluZ3MvcHJvZmlsZS1zZXR0aW5ncy5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtaW5mby1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHg7XG59XG4iLCIucHJvZmlsZS1pbmZvLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/modals/edit-name/edit-name.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/modals/edit-name/edit-name.component.ts ***!
    \********************************************************************/

  /*! exports provided: EditNameComponent */

  /***/
  function srcAppComponentsModalsEditNameEditNameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNameComponent", function () {
      return EditNameComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../actions/main.action */
    "./src/app/actions/main.action.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");

    let EditNameComponent = class EditNameComponent {
      constructor(bus, dialogRef, data) {
        this.bus = bus;
        this.dialogRef = dialogRef;
        this.data = data;
        this.chatTypes = _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_5__["ChatTypes"];
        this.updateError = '';
      }

      ngOnInit() {
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_4__["EDIT_INFO_ERROR"], this.setError, this);
      }

      setError(err) {
        this.updateError = err.error.message;
      }

      create() {
        this.data.callback(this.data.name, this.data.description, this.dialogRef);
      }

      close() {
        this.dialogRef.close();
      }

      ngOnDestroy() {
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_4__["EDIT_INFO_ERROR"], this.setError);
      }

    };

    EditNameComponent.ctorParameters = () => [{
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    EditNameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-name',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-name.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/edit-name/edit-name.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-name.style.scss */
      "./src/app/components/modals/edit-name/edit-name.style.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], EditNameComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/edit-name/edit-name.style.scss":
  /*!******************************************************************!*\
    !*** ./src/app/components/modals/edit-name/edit-name.style.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsEditNameEditNameStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edit-name-container {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.edit-name-container mat-form-field {\n  width: 100%;\n  height: 50px;\n}\n.edit-name-container .edit-name-controls {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.edit-name-container .edit-name-controls .edit-name-button {\n  width: 80px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2VkaXQtbmFtZS9lZGl0LW5hbWUuc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvZWRpdC1uYW1lL2VkaXQtbmFtZS5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNFSjtBREFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0VKO0FEREk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9lZGl0LW5hbWUvZWRpdC1uYW1lLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIC5lZGl0LW5hbWUtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAuZWRpdC1uYW1lLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIi5lZGl0LW5hbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZWRpdC1uYW1lLWNvbnRhaW5lciBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uZWRpdC1uYW1lLWNvbnRhaW5lciAuZWRpdC1uYW1lLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5lZGl0LW5hbWUtY29udGFpbmVyIC5lZGl0LW5hbWUtY29udHJvbHMgLmVkaXQtbmFtZS1idXR0b24ge1xuICB3aWR0aDogODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/modals/header-info/header-info.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/modals/header-info/header-info.component.ts ***!
    \************************************************************************/

  /*! exports provided: HeaderInfoComponent */

  /***/
  function srcAppComponentsModalsHeaderInfoHeaderInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderInfoComponent", function () {
      return HeaderInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../actions/main.action */
    "./src/app/actions/main.action.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");

    let HeaderInfoComponent = class HeaderInfoComponent {
      constructor(bus, dialogRef, chatService, api, authService) {
        this.bus = bus;
        this.dialogRef = dialogRef;
        this.chatService = chatService;
        this.api = api;
        this.authService = authService;
        this.showRemoveIcon = false;
        this.showMessageIcon = false;
      }

      ngOnInit() {
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["SHOW_CHAT_ICON"], this.toggleMessageIcon, this);
      }

      selectImage(event) {
        if (event.target.files && event.target.files[0]) {
          const file = event.target.files[0];
          this.fr = new FileReader();

          this.fr.onload = () => this.imageSrc = this.fr.result;

          this.fr.readAsDataURL(file);
          this.api.put({
            url: "/avatars/".concat(this.data.chatId, "?type=").concat(this.data.type),
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'x-file-name': event.target.files[0].name,
              'Content-Type': event.target.files[0].type
            }),
            body: event.target.files[0]
          }).subscribe(data => {
            this.data.image = data.url; // active chat avatar is updating by event

            if (this.data.type === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__["ChatTypes"].PROFILE) {
              this.authService.userData.avatar = data.url;
            }
          }, error => console.log(error));
        }
      }

      removeImage() {
        this.api.delete({
          url: "/avatars/".concat(this.data.chatId, "?type=").concat(this.data.type)
        }).subscribe(() => {
          this.data.image = this.imageSrc = ''; // active chat avatar is updating by event

          if (this.data.type === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__["ChatTypes"].PROFILE) {
            this.authService.userData.avatar = '';
          }
        }, error => console.log(error));
      }

      toggleMessageIcon(data) {
        this.showMessageIcon = data;
      }

      handleRemoveIcon(status) {
        this.showRemoveIcon = (this.data.image || this.imageSrc) && status;
      }

      openChat() {
        if (this.data.chatId !== (this.data.type === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__["ChatTypes"].DIALOG ? this.chatService.activeChat.recipientId : this.chatService.activeChat._id)) {
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["OPEN_CHAT"], {
            chatId: this.data.chatId,
            isDialog: this.data.type === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_9__["ChatTypes"].DIALOG
          });
        }

        this.dialogRef.closeAll();
      }

      ngOnDestroy() {
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_8__["SHOW_CHAT_ICON"], this.toggleMessageIcon);
      }

    };

    HeaderInfoComponent.ctorParameters = () => [{
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_5__["BusService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
    }, {
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HeaderInfoComponent.prototype, "data", void 0);
    HeaderInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-info.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/header-info/header-info.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-info.style.scss */
      "./src/app/components/modals/header-info/header-info.style.scss")).default]
    })], HeaderInfoComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/header-info/header-info.style.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/modals/header-info/header-info.style.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsHeaderInfoHeaderInfoStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-header-container {\n  position: relative;\n  background-color: #5580a3;\n  color: #ffffff;\n  padding: 0 20px 15px;\n}\n.profile-header-container .profile-header-info-container {\n  display: -webkit-box;\n  display: flex;\n}\n.profile-header-container .profile-header-info-container .profile-image-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.profile-header-container .profile-header-info-container .profile-image-container .img-container {\n  height: 80px;\n  border-radius: 50%;\n}\n.profile-header-container .profile-header-info-container .profile-image-container .img-container img {\n  width: 80px;\n  height: 80px;\n  max-width: 80px;\n  max-height: 80px;\n  border-radius: 50%;\n  position: absolute;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.profile-header-container .profile-header-info-container .profile-image-container .img-container .remove-image {\n  display: none;\n  width: 15px;\n  font-size: 20px;\n  height: 0;\n  top: -10px;\n  text-align: center;\n  margin: 0 0 0 auto;\n  position: relative;\n  cursor: pointer;\n}\n.profile-header-container .profile-header-info-container .with-remove-icon .remove-image {\n  display: block !important;\n}\n.profile-header-container .profile-header-info-container .profile-name-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 2;\n          flex-grow: 2;\n}\n.profile-header-container .profile-header-info-container .profile-name-container .profile-username {\n  margin: auto 0;\n}\n.profile-header-container .select-image-container, .profile-header-container .select-chat-container {\n  z-index: 1;\n  background-color: #ffffff;\n  border-radius: 50%;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 60px;\n  width: 60px;\n  color: gray;\n  -webkit-transform: translate(-50%, 50%);\n          transform: translate(-50%, 50%);\n  box-shadow: 0 0 4px #888888;\n}\n.profile-header-container .select-image-container:hover, .profile-header-container .select-chat-container:hover {\n  color: #5580a3;\n}\n.profile-header-container .select-image-container mat-form-field, .profile-header-container .select-chat-container mat-form-field {\n  width: 100%;\n  height: 100%;\n  color: transparent;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n.profile-header-container .select-image-container mat-icon, .profile-header-container .select-chat-container mat-icon {\n  height: 30px;\n  width: 35px;\n  -webkit-transform: translate(50%, 50%);\n          transform: translate(50%, 50%);\n  margin: auto;\n}\n.profile-header-container .select-chat-container mat-icon {\n  -webkit-transform: translate(55%, 60%);\n          transform: translate(55%, 60%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2hlYWRlci1pbmZvL2hlYWRlci1pbmZvLnN0eWxlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2hlYWRlci1pbmZvL2hlYWRlci1pbmZvLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0VKO0FEREk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNHTjtBREZNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FDSVI7QURIUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNLVjtBREhRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDS1Y7QURESTtFQUNFLHlCQUFBO0FDR047QURESTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0dOO0FERk07RUFDRSxjQUFBO0FDSVI7QURBRTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7RUFDQSwyQkFBQTtBQ0VKO0FEREk7RUFDRSxjQUFBO0FDR047QURESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0dOO0FEREk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxZQUFBO0FDR047QURDSTtFQUNFLHNDQUFBO1VBQUEsOEJBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL2hlYWRlci1pbmZvL2hlYWRlci1pbmZvLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4MGEzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMCAyMHB4IDE1cHg7XG4gIC5wcm9maWxlLWhlYWRlci1pbmZvLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAucHJvZmlsZS1pbWFnZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIG1heC13aWR0aDogODBweDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnJlbW92ZS1pbWFnZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC53aXRoLXJlbW92ZS1pY29uIC5yZW1vdmUtaW1hZ2Uge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnByb2ZpbGUtbmFtZS1jb250YWluZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZ3JvdzogMjtcbiAgICAgIC5wcm9maWxlLXVzZXJuYW1lIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zZWxlY3QtaW1hZ2UtY29udGFpbmVyLCAuc2VsZWN0LWNoYXQtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAjODg4ODg4O1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICM1NTgwYTM7XG4gICAgfVxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIG1hdC1pY29uIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuICAuc2VsZWN0LWNoYXQtY29udGFpbmVyIHtcbiAgICBtYXQtaWNvbiB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1NSUsIDYwJSk7XG4gICAgfVxuICB9XG59XG4iLCIucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4MGEzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMCAyMHB4IDE1cHg7XG59XG4ucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIC5wcm9maWxlLWhlYWRlci1pbmZvLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIC5wcm9maWxlLWhlYWRlci1pbmZvLWNvbnRhaW5lciAucHJvZmlsZS1pbWFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4ucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIC5wcm9maWxlLWhlYWRlci1pbmZvLWNvbnRhaW5lciAucHJvZmlsZS1pbWFnZS1jb250YWluZXIgLmltZy1jb250YWluZXIge1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wcm9maWxlLWhlYWRlci1jb250YWluZXIgLnByb2ZpbGUtaGVhZGVyLWluZm8tY29udGFpbmVyIC5wcm9maWxlLWltYWdlLWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG4gIG1heC1oZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5wcm9maWxlLWhlYWRlci1jb250YWluZXIgLnByb2ZpbGUtaGVhZGVyLWluZm8tY29udGFpbmVyIC5wcm9maWxlLWltYWdlLWNvbnRhaW5lciAuaW1nLWNvbnRhaW5lciAucmVtb3ZlLWltYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIC5wcm9maWxlLWhlYWRlci1pbmZvLWNvbnRhaW5lciAud2l0aC1yZW1vdmUtaWNvbiAucmVtb3ZlLWltYWdlIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbi5wcm9maWxlLWhlYWRlci1jb250YWluZXIgLnByb2ZpbGUtaGVhZGVyLWluZm8tY29udGFpbmVyIC5wcm9maWxlLW5hbWUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAyO1xufVxuLnByb2ZpbGUtaGVhZGVyLWNvbnRhaW5lciAucHJvZmlsZS1oZWFkZXItaW5mby1jb250YWluZXIgLnByb2ZpbGUtbmFtZS1jb250YWluZXIgLnByb2ZpbGUtdXNlcm5hbWUge1xuICBtYXJnaW46IGF1dG8gMDtcbn1cbi5wcm9maWxlLWhlYWRlci1jb250YWluZXIgLnNlbGVjdC1pbWFnZS1jb250YWluZXIsIC5wcm9maWxlLWhlYWRlci1jb250YWluZXIgLnNlbGVjdC1jaGF0LWNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBjb2xvcjogZ3JheTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAjODg4ODg4O1xufVxuLnByb2ZpbGUtaGVhZGVyLWNvbnRhaW5lciAuc2VsZWN0LWltYWdlLWNvbnRhaW5lcjpob3ZlciwgLnByb2ZpbGUtaGVhZGVyLWNvbnRhaW5lciAuc2VsZWN0LWNoYXQtY29udGFpbmVyOmhvdmVyIHtcbiAgY29sb3I6ICM1NTgwYTM7XG59XG4ucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIC5zZWxlY3QtaW1hZ2UtY29udGFpbmVyIG1hdC1mb3JtLWZpZWxkLCAucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIC5zZWxlY3QtY2hhdC1jb250YWluZXIgbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuLnByb2ZpbGUtaGVhZGVyLWNvbnRhaW5lciAuc2VsZWN0LWltYWdlLWNvbnRhaW5lciBtYXQtaWNvbiwgLnByb2ZpbGUtaGVhZGVyLWNvbnRhaW5lciAuc2VsZWN0LWNoYXQtY29udGFpbmVyIG1hdC1pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xuICBtYXJnaW46IGF1dG87XG59XG4ucHJvZmlsZS1oZWFkZXItY29udGFpbmVyIC5zZWxlY3QtY2hhdC1jb250YWluZXIgbWF0LWljb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1NSUsIDYwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modals/message-modal/message-modal.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/modals/message-modal/message-modal.component.ts ***!
    \****************************************************************************/

  /*! exports provided: MessageModalComponent */

  /***/
  function srcAppComponentsModalsMessageModalMessageModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageModalComponent", function () {
      return MessageModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _message_modal_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./message-modal.model */
    "./src/app/components/modals/message-modal/message-modal.model.ts");

    let MessageModalComponent = class MessageModalComponent {
      constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
      }

      ngOnInit() {}

      close(status) {
        this.dialogRef.close(status);
      }

    };

    MessageModalComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: _message_modal_model__WEBPACK_IMPORTED_MODULE_3__["MessageModalModel"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    MessageModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-modal',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-modal.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/message-modal/message-modal.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-modal.style.scss */
      "./src/app/components/modals/message-modal/message-modal.style.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], MessageModalComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/message-modal/message-modal.model.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/modals/message-modal/message-modal.model.ts ***!
    \************************************************************************/

  /*! exports provided: MessageModalModel */

  /***/
  function srcAppComponentsModalsMessageModalMessageModalModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageModalModel", function () {
      return MessageModalModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class MessageModalModel {
      constructor(message, okButton = false, cancelButton = false) {
        this.message = message;
        this.okButton = okButton;
        this.cancelButton = cancelButton;
      }

    }
    /***/

  },

  /***/
  "./src/app/components/modals/message-modal/message-modal.style.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/modals/message-modal/message-modal.style.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsMessageModalMessageModalStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".message-modal-container {\n  overflow: hidden;\n  height: 250px;\n  margin: auto;\n  padding-top: 20px;\n  text-align: center;\n}\n.message-modal-container h1 {\n  padding: 50px 0;\n}\n.message-modal-container .controls-container {\n  display: -webkit-box;\n  display: flex;\n  margin: 0 10px;\n  height: 30%;\n}\n.message-modal-container .controls-container .cancel, .message-modal-container .controls-container .submit {\n  text-align: center;\n  color: #ffffff;\n  width: 100px;\n}\n.message-modal-container .controls-container .submit {\n  background-color: #5580a3;\n  margin: 0 0 0 auto;\n}\n.message-modal-container .controls-container .cancel {\n  margin-left: 10px;\n  color: #5580a3;\n  border: 1px solid #5580a3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL21lc3NhZ2UtbW9kYWwvbWVzc2FnZS1tb2RhbC5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7QUNFSjtBREFFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNFSjtBRERJO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0dOO0FEREk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FDR047QURESTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9tZXNzYWdlLW1vZGFsL21lc3NhZ2UtbW9kYWwuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlLW1vZGFsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaDEge1xuICAgIHBhZGRpbmc6IDUwcHggMDtcbiAgfVxuICAuY29udHJvbHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIGhlaWdodDogMzAlO1xuICAgIC5jYW5jZWwsIC5zdWJtaXQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgfVxuICAgIC5zdWJtaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU1ODBhMztcbiAgICAgIG1hcmdpbjogMCAwIDAgYXV0bztcbiAgICB9XG4gICAgLmNhbmNlbCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGNvbG9yOiAjNTU4MGEzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzU1ODBhMztcbiAgICB9XG4gIH1cbn1cbiIsIi5tZXNzYWdlLW1vZGFsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMjUwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tZXNzYWdlLW1vZGFsLWNvbnRhaW5lciBoMSB7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5tZXNzYWdlLW1vZGFsLWNvbnRhaW5lciAuY29udHJvbHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGhlaWdodDogMzAlO1xufVxuLm1lc3NhZ2UtbW9kYWwtY29udGFpbmVyIC5jb250cm9scy1jb250YWluZXIgLmNhbmNlbCwgLm1lc3NhZ2UtbW9kYWwtY29udGFpbmVyIC5jb250cm9scy1jb250YWluZXIgLnN1Ym1pdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiAxMDBweDtcbn1cbi5tZXNzYWdlLW1vZGFsLWNvbnRhaW5lciAuY29udHJvbHMtY29udGFpbmVyIC5zdWJtaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4MGEzO1xuICBtYXJnaW46IDAgMCAwIGF1dG87XG59XG4ubWVzc2FnZS1tb2RhbC1jb250YWluZXIgLmNvbnRyb2xzLWNvbnRhaW5lciAuY2FuY2VsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiAjNTU4MGEzO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU4MGEzO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/modals/modals-header/modal-header.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/modals/modals-header/modal-header.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ModalHeaderComponent */

  /***/
  function srcAppComponentsModalsModalsHeaderModalHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalHeaderComponent", function () {
      return ModalHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _edit_name_edit_name_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../edit-name/edit-name.component */
    "./src/app/components/modals/edit-name/edit-name.component.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../actions/main.action */
    "./src/app/actions/main.action.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");

    let ModalHeaderComponent = class ModalHeaderComponent {
      constructor(bus, api, dialog) {
        this.bus = bus;
        this.api = api;
        this.dialog = dialog;
        this.chatTypes = _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_7__["ChatTypes"];
        this.closeDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.save = this.save.bind(this);
      }

      ngOnInit() {}

      editProfileData() {
        this.dialog.open(_edit_name_edit_name_component__WEBPACK_IMPORTED_MODULE_5__["EditNameComponent"], {
          width: '450px',
          data: {
            name: this.data.name,
            description: this.data.description,
            type: this.data.type,
            chatId: this.data.chatId,
            callback: this.save
          }
        });
      }

      save(name, description, dialog) {
        const url = this.data.type === this.chatTypes.PROFILE ? "/users/".concat(this.data.chatId) : "/chats/".concat(this.data.chatId);
        const body = this.data.type === this.chatTypes.PROFILE ? {
          username: name
        } : {
          chatName: name,
          description
        };
        this.api.put({
          url,
          body
        }).subscribe(() => {
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["UPDATE_CHAT_INFO"], {
            name,
            description
          });
          dialog.close();
        }, err => this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["EDIT_INFO_ERROR"], err));
      }

      closeProfile() {
        this.closeDialog.emit();
      }

    };

    ModalHeaderComponent.ctorParameters = () => [{
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"]
    }, {
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_4__["RequestsService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalHeaderComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModalHeaderComponent.prototype, "closeDialog", void 0);
    ModalHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-header.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/modals-header/modal-header.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-header.style.scss */
      "./src/app/components/modals/modals-header/modal-header.style.scss")).default]
    })], ModalHeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/modals-header/modal-header.style.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/modals/modals-header/modal-header.style.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsModalsHeaderModalHeaderStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-header-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: #5580a3;\n  color: #ffffff;\n  display: flex;\n  padding: 30px 20px;\n}\n.modal-header-container .modal-header-title {\n  cursor: default;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n.modal-header-container .modal-header-actions span {\n  cursor: pointer;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL21vZGFscy1oZWFkZXIvbW9kYWwtaGVhZGVyLnN0eWxlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL21vZGFscy1oZWFkZXIvbW9kYWwtaGVhZGVyLnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURBRTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNFSjtBREFFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy9tb2RhbHMtaGVhZGVyL21vZGFsLWhlYWRlci5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWhlYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTgwYTM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIC5tb2RhbC1oZWFkZXItdGl0bGUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuICAubW9kYWwtaGVhZGVyLWFjdGlvbnMgc3BhbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4iLCIubW9kYWwtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1ODBhMztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbn1cbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIC5tb2RhbC1oZWFkZXItdGl0bGUge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIC5tb2RhbC1oZWFkZXItYWN0aW9ucyBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: NewChatFooterComponent */

  /***/
  function srcAppComponentsModalsNewChatNewChatFooterNewChatFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewChatFooterComponent", function () {
      return NewChatFooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../actions/main.action */
    "./src/app/actions/main.action.ts");

    let NewChatFooterComponent = class NewChatFooterComponent {
      constructor(bus) {
        this.bus = bus;
      }

      ngOnInit() {}

      createChat() {
        this.bus.publish(this.type === 'Contacts' ? _actions_main_action__WEBPACK_IMPORTED_MODULE_3__["ADD_MEMBERS"] : _actions_main_action__WEBPACK_IMPORTED_MODULE_3__["CREATE_NEW_CHAT"]);
      }

      close() {
        this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_3__["CLOSE_NEW_CHAT_MODAL"]);
      }

    };

    NewChatFooterComponent.ctorParameters = () => [{
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_2__["BusService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NewChatFooterComponent.prototype, "type", void 0);
    NewChatFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-chat-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-chat-footer.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-chat-footer.style.scss */
      "./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.style.scss")).default]
    })], NewChatFooterComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.style.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/components/modals/new-chat/new-chat-footer/new-chat-footer.style.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsNewChatNewChatFooterNewChatFooterStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".new-chat-footer-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  margin: 10px 20px;\n}\n.new-chat-footer-container .new-chat-footer-button {\n  width: 80px;\n  text-align: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL25ldy1jaGF0L25ldy1jaGF0LWZvb3Rlci9uZXctY2hhdC1mb290ZXIuc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvbmV3LWNoYXQvbmV3LWNoYXQtZm9vdGVyL25ldy1jaGF0LWZvb3Rlci5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURBRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL25ldy1jaGF0L25ldy1jaGF0LWZvb3Rlci9uZXctY2hhdC1mb290ZXIuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctY2hhdC1mb290ZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIC5uZXctY2hhdC1mb290ZXItYnV0dG9uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIiwiLm5ldy1jaGF0LWZvb3Rlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW46IDEwcHggMjBweDtcbn1cbi5uZXctY2hhdC1mb290ZXItY29udGFpbmVyIC5uZXctY2hhdC1mb290ZXItYnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modals/new-chat/new-chat.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/modals/new-chat/new-chat.component.ts ***!
    \******************************************************************/

  /*! exports provided: NewChatComponent */

  /***/
  function srcAppComponentsModalsNewChatNewChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewChatComponent", function () {
      return NewChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _edit_name_edit_name_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../edit-name/edit-name.component */
    "./src/app/components/modals/edit-name/edit-name.component.ts");
    /* harmony import */


    var _models_socket_message_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../models/socket.message.model */
    "./src/app/models/socket.message.model.ts");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../actions/main.action */
    "./src/app/actions/main.action.ts");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../services/sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts"); // services


    let NewChatComponent = class NewChatComponent {
      constructor(dialog, api, bus, chatService, socketsService, dialogRef, data) {
        this.dialog = dialog;
        this.api = api;
        this.bus = bus;
        this.chatService = chatService;
        this.socketsService = socketsService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.users = [];
        this.usersFilter = [];
        this.createChat = this.createChat.bind(this);
      }

      ngOnInit() {
        this.getContacts();
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["CREATE_NEW_CHAT"], this.openCreateChatWindow, this);
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["CLOSE_NEW_CHAT_MODAL"], this.closeModal, this);
        this.bus.subscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["ADD_MEMBERS"], this.addMembers, this);
      }

      getContacts() {
        this.api.get({
          url: '/contacts'
        }).subscribe(res => {
          res.forEach(contact => {
            contact.blurred = !!this.data.contacts.find(existContact => existContact._id === contact._id);
          });
          this.users = [...res];
          this.usersFilter = [...res];
        });
      }

      closeModal() {
        this.dialogRef.close();
      }

      selectUser(userId) {
        const selectedUser = this.users.find(user => user._id === userId);
        selectedUser.selected = !selectedUser.selected;
      }

      openCreateChatWindow() {
        this.dialog.open(_edit_name_edit_name_component__WEBPACK_IMPORTED_MODULE_3__["EditNameComponent"], {
          width: '450px',
          data: {
            action: 'create',
            name: '',
            description: '',
            type: this.data.type === 'New channel' ? _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_5__["ChatTypes"].CHANNEL : _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_5__["ChatTypes"].GROUP,
            callback: this.createChat
          }
        });
      }

      addMembers() {
        this.socketsService.send(new _models_socket_message_model__WEBPACK_IMPORTED_MODULE_4__["SocketMessageModel"]('add-members', {
          chatId: this.chatService.activeChat._id,
          users: this.users.filter(user => user.selected).map(user => user._id)
        }));
        this.dialogRef.close();
      }

      createChat(title, description, dialog) {
        this.chatService.createChat(title, this.data.type === 'New channel' ? _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_5__["ChatTypes"].CHANNEL : _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_5__["ChatTypes"].GROUP, description, this.users.filter(user => user.selected).map(user => user._id)).subscribe(res => {
          this.dialogRef.close();
          dialog.close();
          this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["ADD_NEW_CHAT"], res.chat);
        }, err => console.log('error', err));
      }

      ngOnDestroy() {
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["CREATE_NEW_CHAT"], this.openCreateChatWindow);
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["CLOSE_NEW_CHAT_MODAL"], this.closeModal);
        this.bus.unsubscribe(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["ADD_MEMBERS"], this.addMembers);
      }

    };

    NewChatComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }, {
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_7__["RequestsService"]
    }, {
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_9__["BusService"]
    }, {
      type: _services_chat_chat_service__WEBPACK_IMPORTED_MODULE_8__["ChatService"]
    }, {
      type: _services_sockets_sockets_service__WEBPACK_IMPORTED_MODULE_10__["SocketsService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    NewChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-chat.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/new-chat.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-chat.style.scss */
      "./src/app/components/modals/new-chat/new-chat.style.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], NewChatComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/new-chat/new-chat.style.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/modals/new-chat/new-chat.style.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsNewChatNewChatStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL25ldy1jaGF0L25ldy1jaGF0LnN0eWxlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/modals/new-chat/select-users/select-users.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/components/modals/new-chat/select-users/select-users.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: SelectUsersComponent */

  /***/
  function srcAppComponentsModalsNewChatSelectUsersSelectUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectUsersComponent", function () {
      return SelectUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SelectUsersComponent = class SelectUsersComponent {
      constructor() {
        this.selectUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {}

      select(userId) {
        this.selectUser.emit(userId);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectUsersComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectUsersComponent.prototype, "users", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectUsersComponent.prototype, "usersFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SelectUsersComponent.prototype, "selectUser", void 0);
    SelectUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-users',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-users.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/new-chat/select-users/select-users.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-users.style.scss */
      "./src/app/components/modals/new-chat/select-users/select-users.style.scss")).default]
    })], SelectUsersComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/new-chat/select-users/select-users.style.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/modals/new-chat/select-users/select-users.style.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsNewChatSelectUsersSelectUsersStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".select-users-container .input-search {\n  display: -webkit-box;\n  display: flex;\n  width: 90%;\n  margin: 5px auto;\n  padding: 5px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL25ldy1jaGF0L3NlbGVjdC11c2Vycy9zZWxlY3QtdXNlcnMuc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvbmV3LWNoYXQvc2VsZWN0LXVzZXJzL3NlbGVjdC11c2Vycy5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL25ldy1jaGF0L3NlbGVjdC11c2Vycy9zZWxlY3QtdXNlcnMuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3QtdXNlcnMtY29udGFpbmVyIHtcbiAgLmlucHV0LXNlYXJjaCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogNXB4IGF1dG87XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbn1cbiIsIi5zZWxlY3QtdXNlcnMtY29udGFpbmVyIC5pbnB1dC1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modals/user-contacts/new-contact/new-contact.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/modals/user-contacts/new-contact/new-contact.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: NewContactComponent */

  /***/
  function srcAppComponentsModalsUserContactsNewContactNewContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewContactComponent", function () {
      return NewContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let NewContactComponent = class NewContactComponent {
      constructor(api, authService, dialogRef, data) {
        this.api = api;
        this.authService = authService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsRequest$ = null;
      }

      ngOnInit() {}

      addContact() {
        this.contactsRequest$ = this.api.post({
          url: "/contacts/".concat(this.username),
          body: {}
        }).subscribe(res => this.close(res), err => this.addContactError = err.error.message);
      }

      close(data) {
        this.dialogRef.close(data);
      }

      ngOnDestroy() {
        if (this.contactsRequest$) {
          this.contactsRequest$.unsubscribe();
        }
      }

    };

    NewContactComponent.ctorParameters = () => [{
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    NewContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./new-contact.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/user-contacts/new-contact/new-contact.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./new-contact.style.scss */
      "./src/app/components/modals/user-contacts/new-contact/new-contact.style.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], NewContactComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/user-contacts/new-contact/new-contact.style.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/components/modals/user-contacts/new-contact/new-contact.style.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsUserContactsNewContactNewContactStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".new-contact {\n  margin: 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.new-contact .new-contact-controls {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n.new-contact .new-contact-controls .new-contact-button {\n  width: 100px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL3VzZXItY29udGFjdHMvbmV3LWNvbnRhY3QvbmV3LWNvbnRhY3Quc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvdXNlci1jb250YWN0cy9uZXctY29udGFjdC9uZXctY29udGFjdC5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGO0FEQUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDRUo7QURESTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbHMvdXNlci1jb250YWN0cy9uZXctY29udGFjdC9uZXctY29udGFjdC5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1jb250YWN0IHtcbiAgbWFyZ2luOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAubmV3LWNvbnRhY3QtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAubmV3LWNvbnRhY3QtYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIi5uZXctY29udGFjdCB7XG4gIG1hcmdpbjogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5uZXctY29udGFjdCAubmV3LWNvbnRhY3QtY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm5ldy1jb250YWN0IC5uZXctY29udGFjdC1jb250cm9scyAubmV3LWNvbnRhY3QtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/modals/user-contacts/user-contacts.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/components/modals/user-contacts/user-contacts.component.ts ***!
    \****************************************************************************/

  /*! exports provided: UserContactsComponent */

  /***/
  function srcAppComponentsModalsUserContactsUserContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserContactsComponent", function () {
      return UserContactsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/bus/bus.service */
    "./src/app/services/bus/bus.service.ts");
    /* harmony import */


    var _new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./new-contact/new-contact.component */
    "./src/app/components/modals/user-contacts/new-contact/new-contact.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _actions_main_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../actions/main.action */
    "./src/app/actions/main.action.ts");

    let UserContactsComponent = class UserContactsComponent {
      constructor(bus, api, dialog, dialogRef, data) {
        this.bus = bus;
        this.api = api;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.contactsRequest$ = null;
      }

      ngOnInit() {
        this.contactsRequest$ = this.api.get({
          url: '/contacts'
        }).subscribe(res => {
          this.users = [...res];
          this.usersFilter = [...res];
        });
      }

      selectUser(id) {
        this.bus.publish(_actions_main_action__WEBPACK_IMPORTED_MODULE_6__["OPEN_CHAT"], {
          chatId: id,
          isDialog: true
        });
        this.dialogRef.close();
      }

      openAddContactWindow() {
        const dialogRef = this.dialog.open(_new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_4__["NewContactComponent"], {
          width: '400px'
        });
        dialogRef.afterClosed().subscribe(res => {
          if (res) {
            this.users.unshift(res);
            this.usersFilter = [...this.users];
          }
        });
      }

      closeModel() {
        this.dialogRef.close();
      }

      ngOnDestroy() {
        if (this.contactsRequest$) {
          this.contactsRequest$.unsubscribe();
        }
      }

    };

    UserContactsComponent.ctorParameters = () => [{
      type: _services_bus_bus_service__WEBPACK_IMPORTED_MODULE_3__["BusService"]
    }, {
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]]
      }]
    }];

    UserContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-contacts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-contacts.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modals/user-contacts/user-contacts.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-contacts.style.scss */
      "./src/app/components/modals/user-contacts/user-contacts.style.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"]))], UserContactsComponent);
    /***/
  },

  /***/
  "./src/app/components/modals/user-contacts/user-contacts.style.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/modals/user-contacts/user-contacts.style.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModalsUserContactsUserContactsStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".new-contact .new-contact-button {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvbW9kYWxzL3VzZXItY29udGFjdHMvdXNlci1jb250YWN0cy5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy91c2VyLWNvbnRhY3RzL3VzZXItY29udGFjdHMuc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGFscy91c2VyLWNvbnRhY3RzL3VzZXItY29udGFjdHMuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctY29udGFjdCB7XG4gIC5uZXctY29udGFjdC1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiLm5ldy1jb250YWN0IC5uZXctY29udGFjdC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/registration/registration.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/registration/registration.component.ts ***!
    \*******************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppComponentsRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");
    /* harmony import */


    var _services_enrcypt_decrypt_encrypt_decrypt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/enrcypt-decrypt/encrypt-decrypt.service */
    "./src/app/services/enrcypt-decrypt/encrypt-decrypt.service.ts");
    /* harmony import */


    var _registration_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./registration.model */
    "./src/app/components/registration/registration.model.ts");
    /* harmony import */


    var _registration_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./registration.form */
    "./src/app/components/registration/registration.form.ts");

    let RegistrationComponent = class RegistrationComponent {
      constructor(router, api, authService, encryptDecryptService) {
        this.router = router;
        this.api = api;
        this.authService = authService;
        this.encryptDecryptService = encryptDecryptService;
        this.registerError = '';
        this.registerRequest$ = null;
        this.model = new _registration_model__WEBPACK_IMPORTED_MODULE_6__["RegistrationModel"]();
        this.form = new _registration_form__WEBPACK_IMPORTED_MODULE_7__["default"](this.model);
      }

      ngOnInit() {}

      register() {
        if (this.model.password !== this.model.confirmPassword) {
          this.registerError = 'Passwords are not equal';
        } else {
          this.registerRequest$ = this.api.post({
            url: '/users/create',
            body: {
              username: this.model.username,
              password: this.encryptDecryptService.encrypt(this.model.password)
            }
          }).subscribe(res => this.authService.setUserData(res), err => this.registerError = err.error.message);
        }
      }

      ngOnDestroy() {
        if (this.registerRequest$) {
          this.registerRequest$.unsubscribe();
        }
      }

    };

    RegistrationComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_requests_requests_service__WEBPACK_IMPORTED_MODULE_3__["RequestsService"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _services_enrcypt_decrypt_encrypt_decrypt_service__WEBPACK_IMPORTED_MODULE_5__["EncryptDecryptService"]
    }];

    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registration/registration.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registration.style.scss */
      "./src/app/components/registration/registration.style.scss")).default]
    })], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/components/registration/registration.form.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/registration/registration.form.ts ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegistrationRegistrationFormTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return RegistrationForm;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    class RegistrationForm {
      constructor(model) {
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]();
        this.model = model;
        this.createForm();
      }

      createForm() {
        this.formGroup = this.formBuilder.group({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.username, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.password, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]
          }),
          confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.model.confirmPassword, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          })
        });
        this.formGroup.valueChanges.subscribe(data => {
          this.model.username = data.username;
          this.model.password = data.password;
          this.model.confirmPassword = data.confirmPassword;
        });
      }

      getControl(name) {
        return this.formGroup.get(name);
      }

    }
    /***/

  },

  /***/
  "./src/app/components/registration/registration.model.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/registration/registration.model.ts ***!
    \***************************************************************/

  /*! exports provided: RegistrationModel */

  /***/
  function srcAppComponentsRegistrationRegistrationModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationModel", function () {
      return RegistrationModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class RegistrationModel {}
    /***/

  },

  /***/
  "./src/app/components/registration/registration.style.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/registration/registration.style.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegistrationRegistrationStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  display: block;\n  margin: 15px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59XG4iLCJidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SearchComponent = class SearchComponent {
      constructor() {
        this.filterData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchTimeout = null;
      }

      ngOnInit() {}

      search(value) {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          this.filterData.emit(this.data.filter(el => el[this.fieldToFilter].toLowerCase().startsWith(value.toLowerCase())));
        }, 100);
      }

      ngOnDestroy() {
        clearTimeout(this.searchTimeout);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchComponent.prototype, "fieldToFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SearchComponent.prototype, "filterData", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.style.scss */
      "./src/app/components/search/search.style.scss")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/components/search/search.style.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/search/search.style.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchSearchStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-search {\n  display: -webkit-box;\n  display: flex;\n  width: 90%;\n  margin: 5px auto;\n  padding: 5px;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5zdHlsZS5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDVweCBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4iLCIuaW5wdXQtc2VhcmNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA1cHggYXV0bztcbiAgcGFkZGluZzogNXB4O1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/user-avatar/user-avatar.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/user-avatar/user-avatar.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserAvatarComponent */

  /***/
  function srcAppComponentsUserAvatarUserAvatarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAvatarComponent", function () {
      return UserAvatarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UserAvatarComponent = class UserAvatarComponent {
      constructor() {}

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserAvatarComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserAvatarComponent.prototype, "avatarUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserAvatarComponent.prototype, "chatName", void 0);
    UserAvatarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-avatar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-avatar.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-avatar/user-avatar.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-avatar.style.scss */
      "./src/app/components/user-avatar/user-avatar.style.scss")).default]
    })], UserAvatarComponent);
    /***/
  },

  /***/
  "./src/app/components/user-avatar/user-avatar.style.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/user-avatar/user-avatar.style.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUserAvatarUserAvatarStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  min-width: 37px;\n  width: 37px;\n  height: 37px;\n  border-radius: 50%;\n  background-color: #737391;\n  margin: 0 10px;\n}\n.avatar span {\n  font-size: 25px;\n  color: white;\n}\n.header-avatar {\n  width: 60px;\n  height: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvdXNlci1hdmF0YXIvdXNlci1hdmF0YXIuc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWF2YXRhci91c2VyLWF2YXRhci5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0VKO0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWF2YXRhci91c2VyLWF2YXRhci5zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDM3cHg7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM5MTtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmhlYWRlci1hdmF0YXIge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuIiwiLmF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4td2lkdGg6IDM3cHg7XG4gIHdpZHRoOiAzN3B4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzczNzM5MTtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uYXZhdGFyIHNwYW4ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlYWRlci1hdmF0YXIge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/users-list/user/user.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/users-list/user/user.component.ts ***!
    \**************************************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppComponentsUsersListUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UserComponent = class UserComponent {
      constructor() {}

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserComponent.prototype, "user", void 0);
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/user/user.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.style.scss */
      "./src/app/components/users-list/user/user.style.scss")).default]
    })], UserComponent);
    /***/
  },

  /***/
  "./src/app/components/users-list/user/user.style.scss":
  /*!************************************************************!*\
    !*** ./src/app/components/users-list/user/user.style.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUsersListUserUserStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".single-user {\n  display: -webkit-box;\n  display: flex;\n  padding: 15px 20px;\n  cursor: pointer;\n}\n.single-user .username-container {\n  margin: auto 0;\n}\n.single-user.selected {\n  background-color: #5580a3;\n  color: #ffffff;\n}\n.single-user.blurred {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2VyL3VzZXIuc3R5bGUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy1saXN0L3VzZXIvdXNlci5zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLGNBQUE7QUNFSjtBREVFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQUo7QURFRTtFQUNFLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2VyL3VzZXIuc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtdXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAudXNlcm5hbWUtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IGF1dG8gMDtcbiAgICAudXNlcm5hbWUge1xuICAgIH1cbiAgfVxuICAmLnNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4MGEzO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gICYuYmx1cnJlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG4iLCIuc2luZ2xlLXVzZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaW5nbGUtdXNlciAudXNlcm5hbWUtY29udGFpbmVyIHtcbiAgbWFyZ2luOiBhdXRvIDA7XG59XG4uc2luZ2xlLXVzZXIuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU4MGEzO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zaW5nbGUtdXNlci5ibHVycmVkIHtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/users-list/users-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/users-list/users-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: UsersListComponent */

  /***/
  function srcAppComponentsUsersListUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListComponent", function () {
      return UsersListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UsersListComponent = class UsersListComponent {
      constructor() {
        this.selectUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {}

      select(userId) {
        this.selectUser.emit(userId);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UsersListComponent.prototype, "users", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UsersListComponent.prototype, "selectUser", void 0);
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-list.template.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users-list/users-list.template.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-list.style.scss */
      "./src/app/components/users-list/users-list.style.scss")).default]
    })], UsersListComponent);
    /***/
  },

  /***/
  "./src/app/components/users-list/users-list.style.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/users-list/users-list.style.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUsersListUsersListStyleScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search-users-container {\n  height: 400px;\n  overflow-y: auto;\n}\n.search-users-container .blurred {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYmlsbWFrb3Zza3lpL2JpbG1ha292Y2hpay9jaGF0LWNsaWVudC9zcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LnN0eWxlLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LnN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREFFO0VBQ0Usb0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LnN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLXVzZXJzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIC5ibHVycmVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuIiwiLnNlYXJjaC11c2Vycy1jb250YWluZXIge1xuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNlYXJjaC11c2Vycy1jb250YWluZXIgLmJsdXJyZWQge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/guards/authentication-guard.ts":
  /*!************************************************!*\
    !*** ./src/app/guards/authentication-guard.ts ***!
    \************************************************/

  /*! exports provided: AuthenticationGuard */

  /***/
  function srcAppGuardsAuthenticationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
      return AuthenticationGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let AuthenticationGuard = class AuthenticationGuard {
      constructor(router, authService) {
        this.router = router;
        this.authService = authService;
      }

      canActivate(route, state) {
        if (!this.authService.loggedIn()) {
          this.router.navigate(['/login']);
          return false;
        }

        return true;
      }

    };

    AuthenticationGuard.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }];

    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationGuard);
    /***/
  },

  /***/
  "./src/app/interceptors/auth.interceptor.ts":
  /*!**************************************************!*\
    !*** ./src/app/interceptors/auth.interceptor.ts ***!
    \**************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppInterceptorsAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth/auth.service */
    "./src/app/services/auth/auth.service.ts");

    let AuthInterceptor = class AuthInterceptor {
      constructor(authService) {
        this.authService = authService;
      }

      intercept(request, next) {
        if (!request.url.includes('login') && !request.url.includes('registration')) {
          request = request.clone({
            setHeaders: {
              'x-api-key': this.authService.getToken()
            }
          });
        }

        return next.handle(request);
      }

    };

    AuthInterceptor.ctorParameters = () => [{
      type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }];

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/models/active-user.model.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/active-user.model.ts ***!
    \*********************************************/

  /*! exports provided: ActiveUserModel */

  /***/
  function srcAppModelsActiveUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveUserModel", function () {
      return ActiveUserModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class ActiveUserModel {
      constructor(id = '', username = '', avatar = '') {
        this.id = '';
        this.username = '';
        this.avatar = '';
        this.id = id;
        this.username = username;
        this.avatar = avatar;
      }

    }
    /***/

  },

  /***/
  "./src/app/models/chat-information.model.ts":
  /*!**************************************************!*\
    !*** ./src/app/models/chat-information.model.ts ***!
    \**************************************************/

  /*! exports provided: ChatInformationModel */

  /***/
  function srcAppModelsChatInformationModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatInformationModel", function () {
      return ChatInformationModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/interfaces/chat-types.interfaces */
    "./src/app/services/interfaces/chat-types.interfaces.ts");

    class ChatInformationModel {
      constructor(type, editChat, chatId) {
        this.type = type;
        this.editChat = editChat;
        this.chatId = chatId;
        this.title = type === _services_interfaces_chat_types_interfaces__WEBPACK_IMPORTED_MODULE_1__["ChatTypes"].PROFILE ? 'Settings' : this.type + ' info';
      }

    }
    /***/

  },

  /***/
  "./src/app/models/chat-preview.model.ts":
  /*!**********************************************!*\
    !*** ./src/app/models/chat-preview.model.ts ***!
    \**********************************************/

  /*! exports provided: ChatPreviewModel */

  /***/
  function srcAppModelsChatPreviewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatPreviewModel", function () {
      return ChatPreviewModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class ChatPreviewModel {
      constructor() {
        this['_id'] = '';
      }

    }
    /***/

  },

  /***/
  "./src/app/models/socket.message.model.ts":
  /*!************************************************!*\
    !*** ./src/app/models/socket.message.model.ts ***!
    \************************************************/

  /*! exports provided: SocketMessageModel */

  /***/
  function srcAppModelsSocketMessageModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketMessageModel", function () {
      return SocketMessageModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class SocketMessageModel {
      constructor(action, data) {
        this.action = action;
        this.data = data;
      }

    }
    /***/

  },

  /***/
  "./src/app/services/auth/auth.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/auth/auth.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _requests_requests_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _chat_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../chat/chat.service */
    "./src/app/services/chat/chat.service.ts");
    /* harmony import */


    var _sockets_sockets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts");
    /* harmony import */


    var _models_active_user_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../models/active-user.model */
    "./src/app/models/active-user.model.ts");

    let AuthService = class AuthService {
      constructor(router, http, dialogRef, cookieService, api, chatService, socketsService) {
        this.router = router;
        this.http = http;
        this.dialogRef = dialogRef;
        this.cookieService = cookieService;
        this.api = api;
        this.chatService = chatService;
        this.socketsService = socketsService;
        this.userData = new _models_active_user_model__WEBPACK_IMPORTED_MODULE_9__["ActiveUserModel"]();
      }

      setUserData(res) {
        this.socketsService.initSocket(res._id);
        this.userData = new _models_active_user_model__WEBPACK_IMPORTED_MODULE_9__["ActiveUserModel"](res._id, res.username, res.avatar && res.avatar.url ? res.avatar.url : '');
        this.cookieService.set('token', res.apiKey);
        this.router.navigate(['']);
      }

      getToken() {
        return this.cookieService.get('token');
      }

      loggedIn() {
        return this.cookieService.check('token');
      }

      logout() {
        this.api.get({
          url: '/users/logout'
        }).subscribe(() => this.clearUserData(), () => this.clearUserData());
      }

      clearUserData() {
        this.userData = null;
        this.chatService.activeChat = null;
        this.cookieService.delete('token');
        this.dialogRef.closeAll();
        this.router.navigate(['/login']);
      }

    };

    AuthService.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
    }, {
      type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
    }, {
      type: _requests_requests_service__WEBPACK_IMPORTED_MODULE_6__["RequestsService"]
    }, {
      type: _chat_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]
    }, {
      type: _sockets_sockets_service__WEBPACK_IMPORTED_MODULE_8__["SocketsService"]
    }];

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/bus/bus.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/bus/bus.service.ts ***!
    \*********************************************/

  /*! exports provided: BusService */

  /***/
  function srcAppServicesBusBusServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BusService", function () {
      return BusService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* tslint:disable */

    /* tslint:enable */
    // service for communication between modules, components, services


    let BusService = class BusService {
      constructor() {
        this.listeners = {};
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.eventsSubject); // subscribe on custom events stream; check the name of event and run funcationality with a specific context

        this.events.subscribe(({
          name,
          args
        }) => {
          if (this.listeners[name]) {
            for (const listener of this.listeners[name]) {
              const myThis = listener.boundContext;

              if (listener.boundContext) {
                listener.call(myThis, ...args);
              } else {
                listener(...args);
              }
            }
          }
        });
      } // add new event to stream with a specific context


      subscribe(name, listener, context) {
        if (context) {
          listener.boundContext = context;
        }

        if (!this.listeners[name]) {
          this.listeners[name] = [];
        }

        this.listeners[name].push(listener);
      } // remove event from stream


      unsubscribe(name, listener) {
        const listeners = this.listeners[name];

        if (listeners) {
          const index = listeners.indexOf(listener);
          listeners.splice(index, 1);
        }
      } // start event with Subject.prototype.next()


      publish(name, ...args) {
        this.eventsSubject.next({
          name,
          args
        });
      }

      getListeners() {
        return this.listeners;
      }

    };
    BusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BusService);
    /***/
  },

  /***/
  "./src/app/services/chat/chat.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/chat/chat.service.ts ***!
    \***********************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _requests_requests_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../requests/requests.service */
    "./src/app/services/requests/requests.service.ts");
    /* harmony import */


    var _sockets_sockets_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../sockets/sockets.service */
    "./src/app/services/sockets/sockets.service.ts");
    /* harmony import */


    var _models_chat_preview_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/chat-preview.model */
    "./src/app/models/chat-preview.model.ts");
    /* harmony import */


    var _components_chat_main_chat_messages_scroll_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/chat-main/chat-messages/scroll.model */
    "./src/app/components/chat-main/chat-messages/scroll.model.ts");

    let ChatService = class ChatService {
      constructor(socketsService, api) {
        this.socketsService = socketsService;
        this.api = api;
        this.activeChat = new _models_chat_preview_model__WEBPACK_IMPORTED_MODULE_4__["ChatPreviewModel"]();
      }

      setActiveChat(chat) {
        if (chat) {
          this.activeChat = chat;
          this.activeChat.users = this.activeChat.users.length;
        } else {
          this.activeChat = new _models_chat_preview_model__WEBPACK_IMPORTED_MODULE_4__["ChatPreviewModel"]();
        }
      }

      updateScrollConfig(oldConfig, messages) {
        return new _components_chat_main_chat_messages_scroll_model__WEBPACK_IMPORTED_MODULE_5__["ScrollModel"](messages && messages.length ? messages[messages.length - 1].createdAt : oldConfig.lastMessageDate);
      }

      createChat(chatName, chatType, description, users) {
        return this.api.post({
          url: "/chats",
          body: {
            chatName,
            chatType,
            description,
            users
          }
        });
      }

    };

    ChatService.ctorParameters = () => [{
      type: _sockets_sockets_service__WEBPACK_IMPORTED_MODULE_3__["SocketsService"]
    }, {
      type: _requests_requests_service__WEBPACK_IMPORTED_MODULE_2__["RequestsService"]
    }];

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/services/enrcypt-decrypt/encrypt-decrypt.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/services/enrcypt-decrypt/encrypt-decrypt.service.ts ***!
    \*********************************************************************/

  /*! exports provided: EncryptDecryptService */

  /***/
  function srcAppServicesEnrcyptDecryptEncryptDecryptServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EncryptDecryptService", function () {
      return EncryptDecryptService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    let EncryptDecryptService = class EncryptDecryptService {
      constructor() {}

      encrypt(value) {
        return crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(value, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secretKey.trim()).toString();
      }

      decrypt(textToDecrypt) {
        return crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(textToDecrypt, _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].secretKey.trim()).toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
      }

    };
    EncryptDecryptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EncryptDecryptService);
    /***/
  },

  /***/
  "./src/app/services/interfaces/chat-types.interfaces.ts":
  /*!**************************************************************!*\
    !*** ./src/app/services/interfaces/chat-types.interfaces.ts ***!
    \**************************************************************/

  /*! exports provided: ChatTypes */

  /***/
  function srcAppServicesInterfacesChatTypesInterfacesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatTypes", function () {
      return ChatTypes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ChatTypes;

    (function (ChatTypes) {
      ChatTypes["PROFILE"] = "PROFILE";
      ChatTypes["CHANNEL"] = "CHANNEL";
      ChatTypes["DIALOG"] = "DIALOG";
      ChatTypes["GROUP"] = "GROUP";
    })(ChatTypes || (ChatTypes = {}));
    /***/

  },

  /***/
  "./src/app/services/interfaces/message-types.interfaces.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/services/interfaces/message-types.interfaces.ts ***!
    \*****************************************************************/

  /*! exports provided: MessageTypes */

  /***/
  function srcAppServicesInterfacesMessageTypesInterfacesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageTypes", function () {
      return MessageTypes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MessageTypes;

    (function (MessageTypes) {
      MessageTypes["MESSAGE"] = "MESSAGE";
      MessageTypes["REPORT"] = "REPORT";
    })(MessageTypes || (MessageTypes = {}));
    /***/

  },

  /***/
  "./src/app/services/requests/requests.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/requests/requests.service.ts ***!
    \*******************************************************/

  /*! exports provided: RequestsService */

  /***/
  function srcAppServicesRequestsRequestsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestsService", function () {
      return RequestsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    let RequestsService = class RequestsService {
      constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
      }

      post(options) {
        return this.httpClient.post(this.apiUrl + options.url, options.body);
      }

      get(options) {
        return this.httpClient.get(this.apiUrl + options.url, {
          params: options.parameters
        });
      }

      put(options) {
        return this.httpClient.put(this.apiUrl + options.url, options.body, {
          headers: options.headers
        });
      }

      delete(options) {
        return this.httpClient.delete(this.apiUrl + options.url, {
          params: options.parameters
        });
      }

    };

    RequestsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    RequestsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], RequestsService);
    /***/
  },

  /***/
  "./src/app/services/sockets/sockets.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/sockets/sockets.service.ts ***!
    \*****************************************************/

  /*! exports provided: SocketsService */

  /***/
  function srcAppServicesSocketsSocketsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketsService", function () {
      return SocketsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    let SocketsService = class SocketsService {
      constructor() {}

      initSocket(userId) {
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api, "?userId=").concat(userId), {
          transports: ['websocket']
        });
      }

      send(message) {
        this.socket.emit(message.action, message.data);
      }

      onMessage(message) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
          this.socket.on(message, data => observer.next(data));
        });
      }

    };
    SocketsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketsService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: true,
      apiUrl: 'https://35.225.55.131/api/v1',
      api: 'https://35.225.55.131',
      secretKey: 'GnsKWV78X88BZQkvqzL2WRu333j10qDI'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/rbilmakovskyi/bilmakovchik/chat-client/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map