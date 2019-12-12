/* Copyright (C) 2019 Aniol Marti
* This file is part of DAT - UploaderExamensApunts.
*
* DAT - UploaderExamensApunts is free software: you can redistribute it and/or modify
* it under the terms of the GNU Affero General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* DAT - UploaderExamensApunts is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
* GNU Affero General Public License for more details.
*
* You should have received a copy of the GNU Affero General Public License
* along with DAT - UploaderExamensApunts. If not, see <https://www.gnu.org/licenses/>.
*/
var anterior;
var actual;

$("#id_grau").change(function() {
    if ($("#id_grau option:selected").val() == "") $("#assignatura").show();
    $("#assignatura").hide();
    actual = "#" + "assig" + $("#id_grau option:selected").val();

    $(anterior).hide();
    $(actual).show();
    anterior = actual;
    actual = "";
});
