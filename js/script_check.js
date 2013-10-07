//<![CDATA[
					$(document).ready(function() {
						var selecionaTodos = $('<label><input type="checkbox" class="todos" /><b> Selecionar todos</b></label>');
						$(selecionaTodos).insertBefore('.mudar')
						var todosCheckboxes = $('.mudar').find(':checkbox');
						$('.todos').click(function() {
							if (this.checked) {
							$(this).next().text('Desmarcar todos')
							$(todosCheckboxes).attr('checked', 'checked');
							} else {
							$(this).next().text('Selecionar todos')
							$(todosCheckboxes).removeAttr('checked');
							}
						});
						
						$('<h2 class="legenda"></h2>').insertAfter('.title_check');
						var textoLegenda = $('.title_check').remove().text();
						$('.legenda').append(textoLegenda);
						$('.fieldset').addClass('.fieldset');
					});
				// ]]>