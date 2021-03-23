// Copyright (c) 2019-2021, Wazniya
// Copyright (c) 2014-2019, MyMonero.com
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
class FilesystemUI_Abstract
{
	constructor(options, context)
	{
		const self = this
		{
			self.options = options
			self.context = context
		}
	}
	//
	//
	// Runtime - Imperatives - Dialogs - Save
	// 
	PresentDialogToSaveBase64ImageStringAsImageFile(
		imgData_base64String,
		fn // (err?) -> Void
	) {
		const self = this
		const errStr = "Override PresentDialogToSaveBase64ImageStringAsImageFile in " + self.constructor.name
		fn(new Error(errStr))
		throw errStr // to break development builds
	}
	PresentDialogToSaveTextFile(
		contentString, 
		title,
		defaultFilename_sansExt,
		ext,
		fn,
		optl_uriContentPrefix // this can be undefined for electron since we're saving the file directly
	) {
		const self = this
		const errStr = "Override PresentDialogToSaveTextFile in " + self.constructor.name
		fn(new Error(errStr))
		throw errStr // to break development builds
	}
	//
	//
	// Runtime - Imperatives - Dialogs - Open
	//
	PresentDialogToOpenOneImageFile(
		fn // (err?, absoluteFilePath?) -> Void
	)
	{
		const self = this
		const errStr = "Override PresentDialogToOpenOneImageFile in " + self.constructor.name
		fn(new Error(errStr))
		throw errStr // to break development builds
	}
}
export default FilesystemUI_Abstract;
